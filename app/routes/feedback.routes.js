module.exports = (app) => {
  const feedbacks = require("../controllers/feedback.controller.js");
  var router = require("express").Router();
  // Create a new Feedback
  router.post("/", feedbacks.create);
  // Retrieve all Feedback
  router.get("/", feedbacks.findAll);
  // Retrieve all active Feedback
  router.get("/Date", feedbacks.findAllDate);
  //Retrive all inactive Feedback
  router.get("/TrainerFirstName", feedbacks.findAllTrainer);
  // Retrieve all Trainer by Zip code
  // Retrieve a single Client with id
  router.get("/:id", feedbacks.findOne);
  // Update a Feedback with id
  router.put("/:id", feedbacks.update);
  // Delete a Feedback with id
  router.delete("/:id", feedbacks.delete);
  // Delete all Feedback
  router.delete("/", feedbacks.deleteAll);
  app.use("/api/feedbacks", router);
};
