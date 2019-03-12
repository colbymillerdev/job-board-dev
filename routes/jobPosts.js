const express = require('express');
const router = express.Router();

const JobPost = require('../models/JobPost');

router.post('/', async (req, res) => {
  const jobPost = {
    name: req.body.name,
    website: req.body.website,
    headquarters: req.body.headquarters,
    description: req.body.description
  };

  const response = await new JobPost(jobPost).save();

  res.json(response);
});

module.exports = router;
