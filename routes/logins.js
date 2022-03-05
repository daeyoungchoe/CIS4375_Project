const express = require('express');
const router = express.Router();
const login = require('../services/logins');

//post new login credetials
router.post('/', async function(req, res, next) {
    try {
      res.json(await login.create(req.body));
    } catch (err) {
      console.error(`Error while creating new login credetials`, err.message);
      next(err);
    }
  });

module.exports = router;