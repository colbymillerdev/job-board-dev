import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import profilePic from '../assets/profileimg.jpg';

const JobListItem = ({ emp, job }) => {
  return (
    <List.Item>
      <Image avatar src={profilePic} />
      <List.Content as={Link} to={`/job-post/details/${job._id}`}>
        <List.Header>
          {emp.name} | {job.jobTitle}
        </List.Header>
        <List.Description>Posted {moment(job.createdAt).fromNow()}</List.Description>
      </List.Content>
      <List.Content floated="right">
        <Button primary size="medium" as="a" href={`https://${job.jobAppUrl}`} target="_blank">
          Apply
        </Button>
      </List.Content>
    </List.Item>
  );
};

export default JobListItem;
