import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const EmployerInfoForm = ({ onChange, onClick, errorFields, onBlur }) => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        label="Name"
        placeholder="Company Name"
        name="name"
        onChange={onChange}
        error={errorFields.includes('name')}
        onBlur={onBlur}
      />
      <Form.Input
        fluid
        label="Website"
        placeholder="myawesomecompany.com"
        name="website"
        onChange={onChange}
        onBlur={onBlur}
        error={errorFields.includes('website')}
      />
      <Form.Input
        fluid
        label="Headquarters"
        placeholder="San Francisco, California"
        name="headquarters"
        onChange={onChange}
        onBlur={onBlur}
        error={errorFields.includes('headquarters')}
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.TextArea
        label="Description"
        placeholder="Tell us more about the company..."
        name="description"
        onChange={onChange}
        onBlur={onBlur}
        error={errorFields.includes('description')}
      />
    </Form.Group>
    <Button floated="right" primary onClick={onClick}>
      Next
    </Button>
  </Form>
);

export default EmployerInfoForm;
