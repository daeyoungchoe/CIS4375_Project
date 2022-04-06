const db = require("../models");
const Client = db.clients;
const Op = db.Sequelize.Op;

// Create and Save a new Client
exports.create = (req, res) => {
  // Validate request
  if (!req.body.ClientFirstName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Client
  const client = {
    ClientFirstName: req.body.ClientFirstName,
    ClientLastName: req.body.ClientLastName,
    ClientPhone: req.body.ClientPhone,
    ClientEmail: req.body.ClientEmail,
    ClientAddress: req.body.ClientAddress,
    ClientZip: req.body.ClientZip,
    EmergencyContactFirstName: req.body.EmergencyContactFirstName,
    EmergencyContactLastName: req.body.EmergencyContactLastName,
    EmergencyContactPhone: req.body.EmergencyContactPhone,
    Weight: req.body.Weight,
    Height: req.body.Height,
    active: req.body.active ? req.body.active : false,
  };

  // Save client in the database
  Client.create(client)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client.",
      });
    });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
  const ClientFirstName = req.query.ClientFirstName;
  var condition = ClientFirstName
    ? { ClientFirstName: { [Op.like]: `%${ClientFirstName}%` } }
    : null;
  Client.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clients.",
      });
    });
};

// Retrieve all Clients from the database by Zipcode.
exports.findAllZipCode = (req, res) => {
  const ClientZip = req.query.ClientZip;
  var condition = ClientZip
    ? { ClientZip: { [Op.like]: `%${ClientZip}%` } }
    : null;
  Client.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Clients.",
      });
    });
};
// Find a single Clients with an id
    exports.findOne = (req, res) => {
        const id = req.params.id;
        Client.findByPk(id)
          .then((data) => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find Client with id=${id}.`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: "Error retrieving Client with id=" + id,
            });
          });
      };
// Update a Clients by the id in the request
    exports.update = (req, res) => {
        const id = req.params.id;
        Client.update(req.body, {
          where: { id: id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: "Client was updated successfully.",
              });
            } else {
              res.send({
                message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: "Error updating Client with id=" + id,
            });
          });
      };
// Delete a Clients with the specified id in the request
    exports.delete = (req, res) => {
        const id = req.params.id;
        Client.destroy({
          where: { id: id },
        })
          .then((num) => {
            if (num == 1) {
              res.send({
                message: "Client was deleted successfully!",
              });
            } else {
              res.send({
                message: `Cannot delete Client with id=${id}. Maybe Client was not found!`,
              });
            }
          })
          .catch((err) => {
            res.status(500).send({
              message: "Could not delete Client with id=" + id,
            });
          });
      };
// Delete all Clients from the database.
exports.deleteAll = (req, res) => {
    Client.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Clients were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all clients."
          });
        });
};
// Find all active Client
exports.findAllActive = (req, res) => {
  Client.findAll({ where: {active: true}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving client.",
      });
    });
};
// Find all inactive Client
exports.findAllInactive = (req, res) => {
  Client.findAll({ where: {active: false}})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving client.",
      });
    });
};