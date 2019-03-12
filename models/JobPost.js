const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({
  name: {
    type: String
  },
  website: {
    type: String
  },
  headquarters: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobPost = mongoose.model('JobPost', JobPostSchema);
