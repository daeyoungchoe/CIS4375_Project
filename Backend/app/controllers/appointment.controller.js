const db = require("../models");
const Appointment = db.appointment;
const Trainer = db.trainers;
const Client = db.clients;
const TrainingDetail = db.trainingdetail;
const Op = db.Sequelize.Op;
// Create and Save a new Appointment
exports.create = (req, res) => {
  // validate request
  if (!req.body.AppointmentID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Appointment
  const appointment = {
    AppointmentID: req.body.AppointmentID,
    TrainerID: req.body.TrainerID,
    ClientID: req.body.ClientID,
    TrainingDetailsID: req.body.TrainingDetailsID,
    AppointmentDate: req.body.AppointmentDate,
    AppointmentDuration: req.body.AppointmentDuration,
    AppointmentLocation: req.body.AppointmentLocation,
    Notes: req.body.Notes
  };

  // Save Appointment in the database
  Appointment.create(appointment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Appointment."
      });
    });
};

// Retrieve all Appointment from the database.
exports.findAll = (req, res) => {
  Appointment.findAll({
    include:[{
      model:Trainer,
      as: 'trainers'
    },
    {
      model:Client,
      as: 'clients'
    },
    {
      model:TrainingDetail,
      as: 'trainingdetail'
    }]
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Appointment.",
      });
    });
};
//Finds the trainer
//exports.findTrainer = (req, res) => {
//  Appointment.findAll({
//    include:[{
//      model: Trainer
//    }]
//  })
//    .then((data) => {
//      res.send(data);
//    })
//    .catch((err) => {
//      res.status(500).send({
//        message:
//          err.message || "Some error occurred while retrieving Appointment.",
//      });
//    });
//};


// Find a single Appointment with an AppointmentID
exports.findOne = (req, res) => {
        const AppointmentID = req.params.AppointmentID;
        Appointment.findByPk(AppointmentID)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find Appointment with id=${AppointmentID}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Appointment with id=" + AppointmentID
            });
          });
      };
// Update a Appointment by the id in the request
exports.update = (req, res) => {
        const AppointmentID = req.params.AppointmentID;
        Appointment.update(req.body, {
          where: { AppointmentID: AppointmentID }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Appointment was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Appointment with id=${AppointmentID}. Maybe Appointment was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Appointment with id=" + AppointmentID
            });
          });
      };
// Delete a Appointment with the specified AppointmentID in the request
exports.delete = (req, res) => {
        const AppointmentID = req.params.AppointmentID;
        Appointment.destroy({
          where: { AppointmentID: AppointmentID }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Appointment was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete Appointment with id=${AppointmentID}. Maybe Appointment was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Appointment with id=" + AppointmentID
            });
          });
      };
// Delete all Appointment from the database.
exports.deleteAll = (req, res) => {
    Appointment.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Appointment were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Appointment."
          });
        });
};