import React from 'react';
import { List, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

import profilePic from '../assets/profileimg.jpg';

const JobListItem = ({ emp, job, handleClicks }) => {
  return (
    <List.Item>
      <Image avatar src={profilePic} />
      <List.Content as={Link} to={`/job-post/details/${job._id}`} onClick={() => handleClicks(job._id)}>
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
      <List.Content floated="right">
        {job.numOfClicks > 0 && (
          <Button style={{ backgroundColor: 'transparent', color: 'white' }}>
            {job.numOfClicks < 25 && (
              <span role="img" aria-label="snowflake">
                ❄️
              </span>
            )}
            {job.numOfClicks > 24 && (
              <span role="img" aria-label="snowflake">
                🔥
              </span>
            )}
            <Clicks>
              {job.numOfClicks} {job.numOfClicks === 1 ? 'click' : 'clicks'}
            </Clicks>
          </Button>
        )}
      </List.Content>
    </List.Item>
  );
};

const Clicks = styled.span`
  font-size: 14px;
  padding-top: 2em;
  font-family: 'gill sans';
`;

export default JobListItem;
