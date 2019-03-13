import React, { Component } from 'react';
import { Step, Container, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';

export default class Employer extends Component {
  state = {
    activeStep: 'info',
    infoCompleted: false,
    descriptionCompleted: false,
    descriptionDisabled: true,
    empName: '',
    empWebsite: '',
    empHeadquarters: '',
    empDescription: ''
  };

  handleNextClick = async () => {
    const employerInfo = {
      name: this.state.empName,
      website: this.state.empWebsite,
      headquarters: this.state.empHeadquarters,
      description: this.state.empDescription
    };

    try {
      await axios.post('/api/employer', employerInfo);

      this.setState({ activeStep: 'description', infoCompleted: true, descriptionDisabled: false });
    } catch (err) {
      console.log(err);
    }
  };

  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
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
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name"
                  placeholder="Company Name"
                  name="empName"
                  onChange={this.handleFormInput}
                />
                <Form.Input
                  fluid
                  label="Website"
                  placeholder="myawesomecompany.com"
                  name="empWebsite"
                  onChange={this.handleFormInput}
                />
                <Form.Input
                  fluid
                  label="Headquarters"
                  placeholder="San Francisco, California"
                  name="empHeadquarters"
                  onChange={this.handleFormInput}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.TextArea
                  label="Description"
                  placeholder="Tell us more about the company..."
                  name="empDescription"
                  onChange={this.handleFormInput}
                />
              </Form.Group>
              <Button floated="right" primary size="large" onClick={this.handleNextClick}>
                Next
              </Button>
            </Form>
          ) : (
            <h1>Job description</h1>
          )}
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin-top: 5em;
`;
