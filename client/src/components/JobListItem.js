import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';

import profilePic from '../assets/profileimg.jpg';

const JobListItem = ({ companyName, jobTitle, postedDt, applyUrl }) => {
  return (
    <List.Item>
      <Image avatar src={profilePic} />
      <List.Content>
        <List.Header as="a">
          {companyName} | {jobTitle}
        </List.Header>
        <List.Description>Posted {postedDt}</List.Description>
      </List.Content>
      <List.Content floated="right">
        <Button primary size="medium" as="a" href={`https://${applyUrl}`} target="_blank">
          Apply
        </Button>
      </List.Content>
    </List.Item>
  );
};

export default JobListItem;
