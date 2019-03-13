import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const JobDescForm = ({ onChange, onBackClick, onPostClick }) => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid label="Job Title" placeholder="Job Title" name="jobTitle" onChange={onChange} />
      <Form.Input fluid label="Estimated Salary (Optional)" placeholder="$$$" name="estSalary" onChange={onChange} />
      <Form.Input
        fluid
        label="Application URL"
        placeholder="Enter URL where candidate can apply"
        name="jobAppUrl"
        onChange={onChange}
      />
    </Form.Group>
    <Button floated="left" secondary onClick={onBackClick}>
      Back
    </Button>
    <Button floated="right" primary onClick={onPostClick}>
      Post Job
    </Button>
  </Form>
);

export default JobDescForm;
