import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const EmployerInfoForm = ({ onChange, onClick }) => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid label="Name" placeholder="Company Name" name="empName" onChange={onChange} />
      <Form.Input fluid label="Website" placeholder="myawesomecompany.com" name="empWebsite" onChange={onChange} />
      <Form.Input
        fluid
        label="Headquarters"
        placeholder="San Francisco, California"
        name="empHeadquarters"
        onChange={onChange}
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.TextArea
        label="Description"
        placeholder="Tell us more about the company..."
        name="empDescription"
        onChange={onChange}
      />
    </Form.Group>
    <Button floated="right" primary onClick={onClick}>
      Next
    </Button>
  </Form>
);

export default EmployerInfoForm;
