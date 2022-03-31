const Trainer = require("../models/trainer.model.js");
// Create and Save a new trainer
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a trainer
  const trainer = new trainer({
    trainerFirstName: req.body.trainerFirstName,
    trainerLastName: req.body.trainerLastName,
    trainerEmail: req.body.trainerEmail,
    trainerPhone: req.body.trainerPhone,
    trainerAddress: req.body.trainerAddress
  });
  // Save trainer in the database
  Trainer.create(trainer, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the trainer."
      });
    else res.send(data);
  });
};

// Retrieve all Trainer from the database (with condition).
exports.findAll = (req, res) => {
    const id = req.query.id;
    Trainer.getAll(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Trainer."
        });
      else res.send(data);
    });
  };
  exports.findAllPublished = (req, res) => {
    Tutorial.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Trainer."
        });
      else res.send(data);
    });
  };
    


// Update a trainer identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Trainer.updateById(
    req.params.id,
    new Trainer(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Trainer with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Trainer with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );  
};
