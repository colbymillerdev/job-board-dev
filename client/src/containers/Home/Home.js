import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Segment, List, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { fetchEmployers, fetchJobDescriptions } from '../../actions/index';

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

class Home extends Component {
  async componentDidMount() {
    await this.props.fetchEmployers();
    this.props.fetchJobDescriptions();
  }

  handleClicks = async id => {
    try {
      await axios.put(`/api/job-description/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

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
              {!this.props.isLoading && this.props.jobDescriptions.length === 0 && (
                <NoJobs>
                  No jobs to display{' '}
                  <span role="img" aria-label="crying-face">
                    😢
                  </span>
                </NoJobs>
              )}
              {this.props.jobDescriptions.map(job => {
                const emp = this.props.employers.find(e => e._id === job.empId);
                return <JobListItem job={job} emp={emp} key={job._id} handleClicks={this.handleClicks} />;
              })}
            </List>
          </Segment>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employers: state.employers,
  jobDescriptions: state.jobDescriptions,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { fetchEmployers, fetchJobDescriptions }
)(Home);
