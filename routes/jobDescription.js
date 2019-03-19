const express = require('express');
const router = express.Router();

const JobDescription = require('../models/JobDescription');

router.post('/upload', (req, res) => {
  let uploadFile = req.files.filepond;
  const fileName = req.files.filepond.name;
  uploadFile.mv(`${__dirname}/tmp/job-description/${fileName}`, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({
      file: `tmp/job-description/${req.files.filepond.name}`
    });
  });
});

router.post('/', async (req, res) => {
  try {
    const jobDesc = {
      jobTitle: req.body.jobTitle,
      estSalary: req.body.estSalary,
      jobAppUrl: req.body.jobAppUrl,
      empId: req.body.empId
    };

    const response = await new JobDescription(jobDesc).save();

    res.json(response);
  } catch (err) {
    res.status(400).json({ error: 'There was an issue saving the job description.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const jobDesc = await JobDescription.find();

    res.json(jobDesc);
  } catch (err) {
    res.status(404).json({ notfound: 'Job Description data can not be found.' });
  }
});

module.exports = router;
