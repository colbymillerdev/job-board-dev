const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const fs = require('fs');

const JobDescription = require('../models/JobDescription');
const keys = require('../config/keys');

//configuring the AWS environment
AWS.config.update({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});
const s3 = new AWS.S3();

router.post('/upload', (req, res) => {
  let uploadFile = req.files.filepond;
  const fileName = req.files.filepond.name;
  const filePath = `${__dirname}/tmp/job-description/${fileName}`;

  uploadFile.mv(filePath, err => {
    if (err) {
      return res.status(500).json({ uploaderror: 'There was an error uploading the file.' });
    }

    // Configure s3 parameters.
    const params = {
      Bucket: 'job-board-dev',
      Body: fs.createReadStream(filePath),
      Key: `job-descriptions/${Date.now()}_${req.files.filepond.name}`
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ s3error: 'There was an error uploading the file to s3.' });
      }

      if (data) {
        // Store uploaded url.
        this.s3Url = data.Location;
        // Remove file from tmp dir after upload to s3.
        fs.unlink(filePath, err => {
          if (err) {
            console.log(err);
            res.status(500).json({ unlinkerror: 'Error removing file from tmp location.' });
          }
        });

        return res.json({ success: 'File uploaded successfully.' });
      }
    });
  });
});

router.post('/', async (req, res) => {
  try {
    const jobDesc = {
      jobTitle: req.body.jobTitle,
      estSalary: req.body.estSalary,
      jobAppUrl: req.body.jobAppUrl,
      empId: req.body.empId,
      awsUploadUrl: this.s3Url
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

router.get('/:id', async (req, res) => {
  try {
    const jobDesc = await JobDescription.findById(req.params.id);

    res.json(jobDesc);
  } catch (err) {
    res.status(404).json({ notfound: 'Job Description data can not be found.' });
  }
});

module.exports = router;
