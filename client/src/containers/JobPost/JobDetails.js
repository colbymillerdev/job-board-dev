import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchJobDescription, fetchEmployer } from '../../actions/index';

class JobDetails extends Component {
  async componentDidMount() {
    await this.props.fetchJobDescription(this.props.match.params.id);
    await this.props.fetchEmployer(this.props.jobDescription.empId);
  }

  render() {
    return <div>Job Details</div>;
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
