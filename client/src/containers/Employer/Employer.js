import React, { Component } from 'react';
import { Step, Container, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

export default class Employer extends Component {
  state = {
    activeStep: 'info',
    infoCompleted: false,
    descriptionCompleted: false,
    descriptionDisabled: true
  };

  handleNextClick = () => {
    this.setState({ activeStep: 'description', infoCompleted: true, descriptionDisabled: false });
  };

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
                <Form.Input fluid label="Name" placeholder="Company Name" />
                <Form.Input fluid label="Website" placeholder="myawesomecompany.com" />
                <Form.Input fluid label="Headquarters" placeholder="San Francisco, California" />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.TextArea label="Description" placeholder="Tell us more about the company..." />
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
