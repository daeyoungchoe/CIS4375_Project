const db = require("../models");
const Trainer = db.trainer;
const Op = db.Sequelize.Op;
// Create and Save a new Trainers
exports.create = (req, res) => {
  // Create a Trainer
  const trainer = {
    TrainerFirstName: req.body.TrainerFirstName,
    TrainerLastName: req.body.TrainerLastName,
    TrainerPhone: req.body.TrainerPhone,
    TrainerEmail: req.body.TrainerEmail,
    TrainerAddress: req.body.TrainerAddress,
    EmergencyContactFirstName: req.body.EmergencyContactFirstName,
    EmergencyContactLastName: req.body.EmergencyContactLastName,
    EmergencyContactPhone: req.body.EmergencyContactPhone
  };
  // Save trainer in the database
  Trainer.create(trainer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trainer."
      });
    });
};
// Retrieve all Trainers from the database.
exports.findAll = (req, res) => {
    Trainer.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Trainers."
        });
      });
};
// Find a single Trainers with an id
exports.findOne = (req, res) => {
    exports.findOne = (req, res) => {
        const id = req.params.id;
        Trainer.findByPk(id)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find Trainer with id=${id}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Trainer with id=" + id
            });
          });
      };
};
// Update a Trainers by the id in the request
exports.update = (req, res) => {
    exports.update = (req, res) => {
        const id = req.params.id;
        Trainer.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Trainer was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Trainer with id=${id}. Maybe Trainer was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Trainer with id=" + id
            });
          });
      };
};
// Delete a Trainers with the specified id in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const id = req.params.id;
        Trainer.destroy({
          where: { id: id }
        })
          .then(num => {
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
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Trainer with id=" + id
            });
          });
      };
};
// Delete all Trainers from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Trainers were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all trainers."
          });
        });
};
