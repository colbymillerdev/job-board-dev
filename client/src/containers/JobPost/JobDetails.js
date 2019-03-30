import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchJobDescription, fetchEmployer } from '../../actions/index';

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
            <BackLink to={'/'}>Back to Job Listings</BackLink>
            <Header>{this.props.jobDescription.jobTitle}</Header>
            <SubHeader>Posted {moment(this.props.jobDescription.createdAt).fromNow()}</SubHeader>
            <CompanyName>{this.props.employer.name}</CompanyName>
            <CompanyLocation>Headquarters: {this.props.employer.headquarters}</CompanyLocation>
            <CompanyWebsite href={`https://${this.props.employer.website}`} target="_blank">
              View Company Website
            </CompanyWebsite>
            <div>
              <Button
                primary
                size="mini"
                as="a"
                href={`https://${this.props.jobDescription.jobAppUrl}`}
                target="_blank"
                style={{ marginTop: 15 }}
                content="Apply for this Position"
              />
            </div>

            <Divider />
            <DescriptionHeader>About {this.props.employer.name}:</DescriptionHeader>
            <CompanyDescription>{this.props.employer.description}</CompanyDescription>
            <Divider />
            {this.props.jobDescription.awsUploadUrl && (
              <JobDescription
                title="Job Description"
                src={`https://docs.google.com/gview?url=${this.props.jobDescription.awsUploadUrl}&embedded=true`}
              />
            )}
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

// Styled Components
const Header = styled.div`
  font-size: 40px;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
  text-align: left;
  font-family: 'gill sans';
  font-weight: bold;
  color: #1b1c1d;
`;

const Container = styled.div`
  margin-top: 2em;
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

const DescriptionHeader = styled.div`
  font-size: 16px;
  text-align: left;
  margin-left: 0.15em;
  color: #1b1c1d;
  font-family: 'gill sans';
  font-weight: bold;
`;

const CompanyDescription = styled.p`
  margin-left: 0.15em;
  margin-top: 0.5em;
`;

const JobDescription = styled.iframe`
  width: 100%;
  height: 75vh;
`;

const BackLink = styled(Link)`
  font-size: 14px;
  text-align: left;
  font-family: 'gill sans';
`;
