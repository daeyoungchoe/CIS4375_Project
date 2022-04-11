module.exports = (app) => {
  const feedbacks = require("../controllers/feedback.controller.js");
  var router = require("express").Router();
  // Create a new Feedback
  router.post("/", feedbacks.create);
    // Retrieve all Feedback 
    router.get("/", feedbacks.findAll);
  // Retrieve all Feedback via trainer
  router.get("/TrainerFirstName", feedbacks.findAllTrainer);
  // Retrieve all feedback date 
  router.get("/Date", feedbacks.findAllDate);
  //Retrive all feedback client
  router.get("/ClientFirstName", feedbacks.findAllClient);

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
