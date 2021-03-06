const db = require("../models");
const Appointment = db.appointments;
const Op = db.Sequelize.Op;
// Create and Save a new Appointment
exports.create = (req, res) => {
  // validate request
  if (!req.body.TrainerFirstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Appointment
  const appointment = {
    TrainerFirstName: req.body.TrainerFirstName,
    TrainerLastName: req.body.TrainerLastName,
    ClientFirstName: req.body.ClientFirstName,
    ClientLastName: req.body.ClientLastName,
    TrainingType: req.body.TrainingType,
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
        message: err.message || "Some error occurred while creating the Appointment."
      });
    });
};

// Retrieve all Appointment from the database.
exports.findAll = (req, res) => {
  const TrainerFirstName = req.query.TrainerFirstName;
  var condition = TrainerFirstName ? {
      TrainerFirstName: {
        [Op.like]: `%${TrainerFirstName}%`
      }
    } :
    null;
  Appointment.findAll({
      where: condition
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Trainers.",
      });
    });
};

// Retrieve all Appointment from the database.
exports.findAllLocation = (req, res) => {
  const AppointmentLocation = req.query.AppointmentLocation;
  var condition = AppointmentLocation ? {
      AppointmentLocation: {
        [Op.like]: `%${AppointmentLocation}%`
      }
    } :
    null;
  Appointment.findAll({
      where: condition
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Trainers.",
      });
    });
};
// Find a single Appointment with an AppointmentID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Appointment.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Appointment with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Appointment with id=" + id
      });
    });
};
// Update a Appointment by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Appointment.update(req.body, {
      where: {
        id: id
      }
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Appointment was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Appointment with id=${id}. Maybe Appointment was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Appointment with id=" + id,
      });
    });
};
// Delete a Appointment with the specified AppointmentID in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Appointment.destroy({
      where: {
        id: id
      },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Appointment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Appointment with id=${id}. Maybe Appointment was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Appointment with id=" + id,
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
      res.send({
        message: `${nums} Appointment were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Appointment."
      });
    });
};