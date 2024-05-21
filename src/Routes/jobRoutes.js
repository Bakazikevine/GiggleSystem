const { createJobController, getJobByNameController,getAllJobsController, updateJobController, deleteJobController, getJobByIdController } = require('../controllers/jobControllers');
const express = require('express');
const router = express.Router();

// CREATE JOB
router.post('/createJob', createJobController);

// GET JOB BY NAME
router.get('/getbyName/:JobName',getJobByNameController );
// GET JOB BY ID JOB
router.get('/getbyId/:id',getJobByIdController);
// GET ALL JOBS
router.get('/getAll',getAllJobsController );
// UPDATE JOB
router.put('/updateJob/:id',updateJobController);
// DELETE JOB
router.delete('/delete/:id',deleteJobController);
module.exports = router;