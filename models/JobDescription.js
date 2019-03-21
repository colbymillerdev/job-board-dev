const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobDescriptionSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  estSalary: {
    type: String
  },
  jobAppUrl: {
    type: String,
    required: true
  },
  jobDescFile: {
    type: String
  },
  empId: {
    type: String,
    required: true
  },
  awsUploadKey: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobDescription = mongoose.model('JobDescription', JobDescriptionSchema);
