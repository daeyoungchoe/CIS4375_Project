const db = require("../models");
const TrainingDetail = db.trainingdetail;
const Op = db.Sequelize.Op;

// Retrieve all Appointment from the database.
exports.findAll = (req, res) => {
  TrainingDetail.findAll()
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