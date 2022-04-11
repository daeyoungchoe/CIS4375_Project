module.exports = app => {
  const trainers = require("../controllers/trainer.controller.js");
  var router = require("express").Router();
  // Create a new Trainer
  router.post("/", trainers.create);
  // Retrieve all Trainers
  router.get("/", trainers.findAll);
  // Retrieve all active Trainer
  router.get("/active", trainers.findAllActive);
  //Retrive all inactive Trainers
  router.get("/inactive", trainers.findAllInactive);
  // Retrieve a single Trainer with id
  router.get("/:id", trainers.findOne);
  // Update a Trainer with id
  router.put("/:id", trainers.update);
  // Delete a Trainer with id
  router.delete("/:id", trainers.delete);
  // Delete all Trainers
  router.delete("/", trainers.deleteAll);
  app.use("/api/trainers", router);
};