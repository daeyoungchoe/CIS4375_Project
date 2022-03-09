const express = require('express');
const router = express.Router();
const clients = require('../services/clients');
const activeClients = require('../services/activeClients');
const inactiveClients = require('../services/inactiveClients');
const clientPerformance = require('../services/clientPerformance');
const clientsZip = require('../services/clientsZip');

//get code for clients
router.get('/', async function(req, res, next) {
  try {
    res.json(await clients.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting clients `, err.message);
    next(err);
  }
});

//get code for active clients
router.get('/active', async function(req, res, next) {
  try {
    res.json(await activeClients.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting clients `, err.message);
    next(err);
  }
});

//get code for inactive clients
router.get('/inactive', async function(req, res, next) {
  try {
    res.json(await inactiveClients.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting clients `, err.message);
    next(err);
  }
});

//get code for client performance
router.get('/performance', async function(req, res, next) {
  try {
    res.json(await clientPerformance.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting client performance `, err.message);
    next(err);
  }
});

//get code for clients by Zip Code
router.get('/zipcode', async function(req, res, next) {
  try {
    res.json(await clientsZip.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting client performance `, err.message);
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