const express = require('express');
const router = express.Router();

const Employer = require('../models/Employer');

router.post('/', async (req, res) => {
  try {
    const employer = {
      name: req.body.name,
      website: req.body.website,
      headquarters: req.body.headquarters,
      description: req.body.description
    };

    const response = await new Employer(employer).save();

    res.json(response);
  } catch (err) {
    res.status(400).json({ error: 'There was an issue saving the employer info.' });
  }
});

module.exports = router;
