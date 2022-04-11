const db = require("../models");
const Feedback = db.feedbacks;
const Op = db.Sequelize.Op;

// Create and Save a new Feedback
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ClientFirstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a feedbacks
  const feedback = {
    ClientFirstName: req.body.ClientFirstName,
    ClientLastName: req.body.ClientLastName,
    TrainerFirstName: req.body.TrainerFirstName,
    TrainerLastName: req.body.TrainerLastName,
    Date: req.body.Date,
    RateSession: req.body.RateSession,
    RateTrainer: req.body.RateTrainer,
    Comment: req.body.Comment,
  };

  // Save feedbacks in the database
  Feedback.create(feedback)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Feedback.",
      });
    });
};

// Retrieve all feedbacks from the database.
exports.findAll = (req, res) => {
  const ClientFirstName = req.query.ClientFirstName;
  var condition = ClientFirstName
    ? { ClientFirstName: { [Op.like]: `%${ClientFirstName}%` } }
    : null;
  Feedback.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Feedbacks.",
      });
    });
};

// Retrieve all feedbacks from the database by Date.
exports.findAllDate = (req, res) => {
  const Date = req.query.Date;
  var condition = Date
    ? { Date: { [Op.like]: `%${Date}%` } }
    : null;
  Feedback.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Feedback.",
      });
    });
};
// Retrieve all feedbacks from the database by trainer Name.
exports.findAllTrainer = (req, res) => {
  const TrainerFirstName = req.query.TrainerFirstName;
  var condition = TrainerFirstName
    ? { TrainerFirstName: { [Op.like]: `%${TrainerFirstName}%` } }
    : null;
  Feedback.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Feedback.",
      });
    });
};
// Find a single feedbacks with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Feedback.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Feedback with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Feedback with id=" + id,
      });
    });
};
// Update a feedbacks by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Feedback.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Feedback with id=${id}. Maybe Feedback was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Feedback with id=" + id,
      });
    });
};
// Delete a Feedback with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Feedback.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Feedback with id=${id}. Maybe Feedback was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Feedback with id=" + id,
      });
    });
};
// Delete all Feedback from the database.
exports.deleteAll = (req, res) => {
  Feedback.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Feedback were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all feedbacks.",
      });
    });
};


