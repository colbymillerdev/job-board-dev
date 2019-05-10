import React, { Component } from 'react';
import { Step, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

import EmployerInfoForm from '../../components/EmployerInfoForm';
import JobDescForm from '../../components/JobDescForm';
import { deleteEmployer } from '../../actions';

class Employer extends Component {
  state = {
    activeStep: 'info',
    infoCompleted: false,
    descriptionCompleted: false,
    descriptionDisabled: true,
    name: '',
    website: '',
    headquarters: '',
    description: '',
    jobTitle: '',
    estSalary: '',
    jobAppUrl: '',
    empId: '',
    errorFields: []
  };

  componentWillUnmount() {
    if (this.state.activeStep === 'description') this.props.deleteEmployer(this.state.empId);
  }

  handleNextClick = async () => {
    const employerInfo = {
      name: this.state.name,
      website: this.state.website,
      headquarters: this.state.headquarters,
      description: this.state.description
    };

    // Validate empty fields and display errors.
    if (this.validateBlankFields(employerInfo)) return;

    try {
      const res = await axios.post('/api/employer', employerInfo);

      this.setState({
        activeStep: 'description',
        infoCompleted: true,
        descriptionDisabled: false,
        empId: res.data._id
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      errorFields: this.state.errorFields.filter(i => i !== event.target.name)
    });
  };

  handleBackClick = () => {
    this.setState({ activeStep: 'info', infoCompleted: false, descriptionDisabled: true });
  };

  handlePostClick = async () => {
    const jobDesc = {
      jobTitle: this.state.jobTitle,
      estSalary: this.state.estSalary,
      jobAppUrl: this.state.jobAppUrl,
      empId: this.state.empId
    };

    if (this.validateBlankFields(jobDesc)) return;

    try {
      await axios.post('/api/job-description', jobDesc);

      this.setState({ descriptionCompleted: true });
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  validateBlankFields = obj => {
    const entries = Object.entries(obj);
    let errorFields = [];
    for (const [key, value] of entries) {
      if (key !== 'estSalary' && value === '') {
        errorFields.push(key);
      }
    }

    if (errorFields.length > 0) {
      this.setState({ errorFields });
      return true;
    }

    return false;
  };

  // TODO: Add other field level validation here (valid url, etc)
  handleBlur = event => {};

  render() {
    const steps = [
      {
        key: 'info',
        icon: 'id card',
        title: 'Employer Info',
        description: 'Enter info about the company',
        completed: this.state.infoCompleted,
        active: this.state.activeStep === 'item'
      },
      {
        key: 'description',
        icon: 'file alternate',
        title: 'Job Description',
        description: 'Enter or upload a job description',
        active: this.state.activeStep === 'description',
        disabled: this.state.descriptionDisabled,
        completed: this.state.descriptionCompleted
      }
    ];

    return (
      <Wrapper>
        <Container>
          <Step.Group items={steps} widths={2} style={{ marginBottom: 30 }} />
          {this.state.activeStep === 'info' ? (
            <EmployerInfoForm
              onChange={this.handleFormInput}
              onClick={this.handleNextClick}
              errorFields={this.state.errorFields}
              onBlur={this.handleBlur}
            />
          ) : (
            <JobDescForm
              onChange={this.handleFormInput}
              onBackClick={this.handleBackClick}
              onPostClick={this.handlePostClick}
              errorFields={this.state.errorFields}
            />
          )}
        </Container>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { deleteEmployer }
)(Employer);

const Wrapper = styled.div`
  margin-top: 5em;
`;
