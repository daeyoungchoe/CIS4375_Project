const express = require('express');
const router = express.Router();
const clients = require('../services/clients');

//get code for clients
router.get('/', async function(req, res, next) {
  try {
    res.json(await clients.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting clients `, err.message);
    next(err);
  }
});

//Post code for new client
router.post('/', async function(req, res, next) {
  try {
    res.json(await clients.create(req.body));
  } catch (err) {
    console.error(`Error while creating client`, err.message);
    next(err);
  }
});

module.exports = router;