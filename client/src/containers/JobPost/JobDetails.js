import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { fetchJobDescription, fetchEmployer } from '../../actions/index';

const Header = styled.div`
  font-size: 40px;
  margin-top: 2em;
  margin-bottom: 0.25em;
  text-align: left;
  font-family: 'gill sans';
  font-weight: bold;
  color: #1b1c1d;
`;

const Container = styled.div`
  margin-left: 20em;
  margin-right: 20em;
`;

const SubHeader = styled.div`
  font-size: 16px;
  text-align: left;
  margin-left: 0.15em;
  color: gray;
  font-family: 'gill sans';
  font-weight: bold;
`;

const CompanyName = styled.div`
  font-size: 30px;
  margin-top: 1em;
  text-align: left;
  font-family: 'gill sans';
  color: #1b1c1d;
`;

const CompanyLocation = styled.div`
  font-size: 18px;
  margin-top: 0.3em;
  text-align: left;
  font-family: 'gill sans';
  color: #1b1c1d;
`;

const CompanyWebsite = styled.a`
  font-size: 18px;
  margin-top: 0.3em;
  text-align: left;
  font-family: 'gill sans';
`;

class JobDetails extends Component {
  async componentDidMount() {
    await this.props.fetchJobDescription(this.props.match.params.id);
    await this.props.fetchEmployer(this.props.jobDescription.empId);

    console.log(this.props.jobDescription);
    console.log(this.props.employer);
  }

  render() {
    return (
      <Container>
        {!this.props.isLoading && (
          <div>
            <Header>{this.props.jobDescription.jobTitle}</Header>
            <SubHeader>Posted {moment(this.props.jobDescription.createdAt).fromNow()}</SubHeader>
            <CompanyName>{this.props.employer.name}</CompanyName>
            <CompanyLocation>Headquarters: {this.props.employer.headquarters}</CompanyLocation>
            <CompanyWebsite href={`https://${this.props.employer.website}`} target="_blank">
              View Company Website
            </CompanyWebsite>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  employer: state.employer,
  jobDescription: state.jobDescription,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { fetchJobDescription, fetchEmployer }
)(JobDetails);
