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

router.get('/', async (req, res) => {
  try {
    const employers = await Employer.find();

    res.json(employers);
  } catch (err) {
    res.status(404).json({ notfound: 'Employer data can not be found.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const employers = await Employer.findById(req.params.id);

    res.json(employers);
  } catch (err) {
    res.status(404).json({ notfound: 'Employer data can not be found.' });
  }
});

module.exports = router;
