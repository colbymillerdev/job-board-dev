const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressFileUpload = require('express-fileupload');

const employer = require('./routes/employer');
const jobDescription = require('./routes/jobDescription');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// File upload
app.use(expressFileUpload());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('Connected Successfully'))
  .catch(err => console.log(err));

// Routes
app.use('/api/employer', employer);
app.use('/api/job-description', jobDescription);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
