const express = require('express');
const router = express.Router();
const feedback = require('../services/feedback');
const trainerPerformance = require('../services/trainerPerformance');
const clientSatisfaction = require('../services/clientSatisfaction');

//get code for trainer performance
router.get('/trainerPerformance', async function(req, res, next) {
  try {
    res.json(await trainerPerformance.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting trainer performance `, err.message);
    next(err);
  }
});

//get code for client satisfaction
router.get('/clientSatisfaction', async function(req, res, next) {
  try {
    res.json(await clientSatisfaction.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting client satisfaction `, err.message);
    next(err);
  }
});

//post new feedback
router.post('/', async function(req, res, next) {
    try {
      res.json(await feedback.create(req.body));
    } catch (err) {
      console.error(`Error while creating new feedback`, err.message);
      next(err);
    }
  });

module.exports = router;