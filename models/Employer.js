const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
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

module.exports = Employer = mongoose.model('Employer', EmployerSchema);
