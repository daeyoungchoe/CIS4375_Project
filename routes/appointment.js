const express = require('express');
const router = express.Router();
const appointment = require('../services/appointment');

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