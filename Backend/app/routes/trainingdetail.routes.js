module.exports = app => {
    const trainingdetails = require("../controllers/trainingdetails.controller.js");
    var router = require("express").Router();

    // Retrieve all appointments
    router.get("/", trainingdetails.findAll);

    app.use('/api/trainingdetails', router);
  };