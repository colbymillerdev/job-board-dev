import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

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
    <FilePond server="/api/job-description/upload" />
    <Button floated="left" secondary onClick={onBackClick}>
      Back
    </Button>
    <Button floated="right" primary onClick={onPostClick}>
      Post Job
    </Button>
  </Form>
);

export default JobDescForm;
