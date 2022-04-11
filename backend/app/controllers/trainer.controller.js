const db = require("../models");
const Trainer = db.trainers;
const Op = db.Sequelize.Op;

// Create and Save a new Trainers
exports.create = (req, res) => {
  // Validate request
  if (!req.body.TrainerFirstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Trainer
  const trainer = {
    TrainerFirstName: req.body.TrainerFirstName,
    TrainerLastName: req.body.TrainerLastName,
    TrainerPhone: req.body.TrainerPhone,
    TrainerEmail: req.body.TrainerEmail,
    TrainerAddress: req.body.TrainerAddress,
    EmergencyContactFirstName: req.body.EmergencyContactFirstName,
    EmergencyContactLastName: req.body.EmergencyContactLastName,
    EmergencyContactPhone: req.body.EmergencyContactPhone,
    active: req.body.active ? req.body.active : false
  };
  // Save Trainer in the database
  Trainer.create(trainer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Trainer."
      });
    });
};
// Retrieve all Trainer from the database.
exports.findAll = (req, res) => {
  const TrainerFirstName = req.query.TrainerFirstName;
  var condition = TrainerFirstName ? {
    TrainerFirstName: {
      [Op.like]: `%${TrainerFirstName}%`
    }
  } : null;
  Trainer.findAll({
      where: condition
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Trainers."
      });
    });
};
// Find a single Trainer with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Trainer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Trainer with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Trainer with id=" + id,
      });
    });
};
// Update a Trainer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Trainer.update(req.body, {
      where: {id: id}
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Trainer was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Trainer with id=${id}. Maybe Trainer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Trainer with id=" + id
      });
    });
};
// Delete a Trainer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Trainer.destroy({
      where: {
        id: id
      }
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Trainer was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Trainer with id=${id}. Maybe Trainer was not found!`
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Trainer with id=" + id
      });
    });
};
// Delete all Trainer from the database.
exports.deleteAll = (req, res) => {
  Trainer.destroy({
      where: {},
      truncate: false
    })
    .then((nums) => {
      res.send({
        message: `${nums} Trainer were deleted successfully!`
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Trainer."
      });
    });
};
// Find all active Trainer
exports.findAllActive = (req, res) => {
  Trainer.findAll({ where: {active: true}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving client.",
      });
    });
};
// Find all inactive Trainer
exports.findAllInactive = (req, res) => {
  Trainer.findAll({ where: {active: false}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving client.",
      });
    });
};