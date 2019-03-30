const Employer = require('../models/Employer');

exports.create_employer = async (req, res) => {
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
};

exports.get_employers = async (req, res) => {
  try {
    const employers = await Employer.find();

    res.json(employers);
  } catch (err) {
    res.status(404).json({ notfound: 'Employer data can not be found.' });
  }
};

exports.get_employer = async (req, res) => {
  try {
    const employers = await Employer.findById(req.params.id);

    res.json(employers);
  } catch (err) {
    res.status(404).json({ notfound: 'Employer data can not be found.' });
  }
};
