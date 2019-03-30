const express = require('express');
const router = express.Router();

const employerController = require('../controllers/employerController');

// Employer routes.
router
  .route('/')
  .get(employerController.get_employers)
  .post(employerController.create_employer);
router.route('/:id').get(employerController.get_employer);

module.exports = router;
