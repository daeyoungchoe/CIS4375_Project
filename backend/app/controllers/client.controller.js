const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;
// Create and Save a new Client
exports.create = (req, res) => {
  // Create a Client
  const client = {
    ClientFirstName: req.body.ClientFirstName,
    ClientLastName: req.body.ClientLastName,
    ClientPhone: req.body.ClientPhone,
    ClientEmail: req.body.ClientEmail,
    ClientAddress: req.body.ClientAddress,
    EmergencyContactFirstName: req.body.EmergencyContactFirstName,
    EmergencyContactLastName: req.body.EmergencyContactLastName,
    EmergencyContactPhone: req.body.EmergencyContactPhone,
    Weight: req.body.Weight,
    Height: req.body.Height
  };

  // Save client in the database
  Client.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    });
};

// Retrieve all Clients from the database.
exports.findAll = (req, res) => {
    Client.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Clients."
        });
      });
};
// Find a single Clients with an ClientID
exports.findOne = (req, res) => {
    exports.findOne = (req, res) => {
        const ClientID = req.params.ClientID;
        Client.findByPk(ClientID)
          .then(data => {
            if (data) {
              res.send(data);
            } else {
              res.status(404).send({
                message: `Cannot find Client with id=${ClientID}.`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving Client with id=" + ClientID
            });
          });
      };
};
// Update a Clients by the id in the request
exports.update = (req, res) => {
    exports.update = (req, res) => {
        const ClientID = req.params.ClientID;
        Client.update(req.body, {
          where: { ClientID: ClientID }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Client was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update Client with id=${ClientID}. Maybe Client was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating Client with id=" + ClientID
            });
          });
      };
};
// Delete a Clients with the specified ClientID in the request
exports.delete = (req, res) => {
    exports.delete = (req, res) => {
        const ClientID = req.params.ClientID;
        Client.destroy({
          where: { ClientID: ClientID }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Client was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete Client with id=${ClientID}. Maybe Client was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Client with id=" + ClientID
            });
          });
      };
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
