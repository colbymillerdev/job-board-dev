import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Segment, List, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import JobListItem from '../../components/JobListItem';

const Header = styled.div`
  font-size: 48px;
  margin-top: 2em;
  margin-bottom: 0.5em;
  text-align: center;
  font-family: 'gill sans';
  font-weight: bold;
  color: #1b1c1d;
`;

const SubHeader = styled.div`
  font-size: 24px;
  margin-top: 0.5em;
  text-align: center;
  color: gray;
  font-family: 'gill sans';
  margin-bottom: 1em;
`;

const NoJobs = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: 'gill sans';
`;

export default class Home extends Component {
  state = {
    jobs: [],
    employers: [],
    loading: false
  };

  async componentDidMount() {
    // Temp way to hold loading state until redux is implemented.
    this.setState({ loading: true });
    const res = await axios.get('/api/job-description');
    const empRes = await axios.get('/api/employer/');
    this.setState({ jobs: res.data, employers: empRes.data, loading: false });
  }

  render() {
    return (
      <div>
        <Container>
          <Header>Remote Work for Devs!</Header>
          <SubHeader>
            Looking for an awesome job that you can work from anywhere in the world? This is the perfect place!
          </SubHeader>
          <Grid>
            <Grid.Column textAlign="center">
              <Link to="/employer/post-job" style={{ color: 'white' }}>
                <Button style={{ marginBottom: 30, justifyContent: 'center' }} primary size="medium">
                  Employer? Post a job!
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
          <Segment inverted>
            <List animated divided inverted relaxed verticalAlign="middle" size="big">
              {this.state.jobs.length === 0 && !this.state.loading && (
                <NoJobs>
                  No jobs to display{' '}
                  <span role="img" aria-label="crying-face">
                    😢
                  </span>
                </NoJobs>
              )}
              {this.state.jobs.map(job => {
                const emp = this.state.employers.find(e => e._id === job.empId);
                return (
                  <JobListItem
                    companyName={emp.name}
                    jobTitle={job.jobTitle}
                    postedDt={moment(job.createdAt).fromNow()}
                    applyUrl={job.jobAppUrl}
                    key={job._id}
                  />
                );
              })}
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}
