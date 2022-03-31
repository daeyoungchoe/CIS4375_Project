module.exports = app => {
    const trainer = require("../controllers/trainer.controller.js");
    var router = require("express").Router();
    // Create a new trainer
    router.post("/", trainer.create);
    // Retrieve all trainer
    router.get("/", trainer.findAll);
    // Update a trainer with id
    router.put("/:id", trainer.update);

    app.use('/api/trainer', router);
  };