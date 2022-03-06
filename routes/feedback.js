const express = require('express');
const router = express.Router();
const feedback = require('../services/feedback');

//post new user
router.post('/', async function(req, res, next) {
    try {
      res.json(await feedback.create(req.body));
    } catch (err) {
      console.error(`Error while creating new feedback`, err.message);
      next(err);
    }
  });

module.exports = router;