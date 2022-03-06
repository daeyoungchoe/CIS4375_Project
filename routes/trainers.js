const express = require('express');
const router = express.Router();
const trainers = require('../services/trainers');

//post new user
router.post('/', async function(req, res, next) {
    try {
      res.json(await trainers.create(req.body));
    } catch (err) {
      console.error(`Error while creating new trainer`, err.message);
      next(err);
    }
  });

module.exports = router;