const express = require('express');
const router = express.Router();
const trainers = require('../services/trainers');

//post new trainer
router.post('/', async function(req, res, next) {
    try {
      res.json(await trainers.create(req.body));
    } catch (err) {
      console.error(`Error while creating new trainer`, err.message);
      next(err);
    }
  });

  //put (update) trainer
router.put('/update/:id', async function(req, res, next) {
  try {
    res.json(await trainers.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating appointment`, err.message);
    next(err);
  }
});

module.exports = router;