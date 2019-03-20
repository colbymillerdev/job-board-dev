const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobDescriptionSchema = new Schema({
  jobTitle: {
    type: String
  },
  estSalary: {
    type: String
  },
  jobAppUrl: {
    type: String
  },
  jobDescFile: {
    type: String
  },
  empId: {
    type: String,
    required: true
  },
  awsUploadUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobDescription = mongoose.model('JobDescription', JobDescriptionSchema);
