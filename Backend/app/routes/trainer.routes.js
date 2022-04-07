module.exports = app => {
    const trainers = require("../controllers/trainer.controller.js");
    var router = require("express").Router();
    // Create a new Trainer
    router.post("/", trainers.create);
    // Retrieve all Trainers
    router.get("/", trainers.findAll);
    // Retrieve a single Trainer with id
    router.get("/:TrainerID", trainers.findOne);
    // Update a Trainer with id
    router.put("/:TrainerID", trainers.update);
    // Delete a Trainer with id
    router.delete("/:TrainerID", trainers.delete);
    // Delete all Trainers
    router.delete("/", trainers.deleteAll);
    app.use('/api/trainers', router);
  };