import React, { Component } from 'react';
import { Step, Container, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';

import EmployerInfoForm from '../../components/EmployerInfoForm';
import JobDescForm from '../../components/JobDescForm';

export default class Employer extends Component {
  state = {
    activeStep: 'info',
    infoCompleted: false,
    descriptionCompleted: false,
    descriptionDisabled: true,
    empName: '',
    empWebsite: '',
    empHeadquarters: '',
    empDescription: '',
    jobTitle: '',
    estSalary: '',
    jobAppUrl: ''
  };

  handleNextClick = async () => {
    const employerInfo = {
      name: this.state.empName,
      website: this.state.empWebsite,
      headquarters: this.state.empHeadquarters,
      description: this.state.empDescription
    };

    try {
      // await axios.post('/api/employer', employerInfo);

      this.setState({ activeStep: 'description', infoCompleted: true, descriptionDisabled: false });
    } catch (err) {
      console.log(err);
    }
  };

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleBackClick = () => {
    this.setState({ activeStep: 'info', infoCompleted: false, descriptionDisabled: true });
  };

  handlePostClick = async () => {
    const jobDesc = {
      jobTitle: this.state.jobTitle,
      estSalary: this.state.estSalary,
      jobAppUrl: this.state.jobAppUrl
    };

    try {
      // await axios.post('/api/job', jobDesc);

      this.setState({ descriptionCompleted: true });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {}

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
            <EmployerInfoForm onChange={this.handleFormInput} onClick={this.handleNextClick} />
          ) : (
            <JobDescForm
              onChange={this.handleFormInput}
              onBackClick={this.handleBackClick}
              onPostClick={this.handlePostClick}
            />
          )}
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 5em;
`;
