const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  headquarters: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Employer = mongoose.model('Employer', EmployerSchema);
