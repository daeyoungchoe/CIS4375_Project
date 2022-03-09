const express = require('express');
const router = express.Router();
const appointment = require('../services/appointment');
const clientAppointments = require('../services/clientAppointments');
const trainerAppointments = require('../services/trainerAppointments');

//get code for client appointments
router.get('/client/:id', async function(req, res, next) {
  try {
    res.json(await clientAppointments.getMultiple(req.params.id, req.query.page));
  } catch (err) {
    console.error(`Error while getting client performance `, err.message);
    next(err);
  }
});

//get code for trainer appointments
router.get('/trainer/:id', async function(req, res, next) {
  try {
    res.json(await trainerAppointments.getMultiple(req.params.id, req.query.page));
  } catch (err) {
    console.error(`Error while getting client performance `, err.message);
    next(err);
  }
});

//post new user
router.post('/', async function(req, res, next) {
    try {
      res.json(await appointment.create(req.body));
    } catch (err) {
      console.error(`Error while creating new appointment`, err.message);
      next(err);
    }
  });

module.exports = router;