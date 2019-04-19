const express = require('express');
const router = express.Router();

const jobDescriptionController = require('../controllers/jobDescriptionController');

// Job description routes.
router.route('/upload').post(jobDescriptionController.upload_job_description);
router
  .route('/')
  .get(jobDescriptionController.get_job_postings)
  .post(jobDescriptionController.create_job_posting);
router
  .route('/:id')
  .get(jobDescriptionController.get_job_posting)
  .put(jobDescriptionController.track_job_clicks);

module.exports = router;
