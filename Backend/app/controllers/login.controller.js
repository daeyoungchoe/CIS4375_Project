const db = require("../models");
const Login = db.login;
const Op = db.Sequelize.Op;
// Create and Save a new Trainers
exports.create = (req, res) => {
  // Create a Trainer
  const login = {
    Username: req.body.Username,
    Password: req.body.Password
  };

  // Save login in the database
  Login.create(login)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Login.",
      });
    });
};

// Retrieve all Trainers from the database.
exports.findAll = (req, res) => {
  Login.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Logins."
      });
    });
};
// Find a single Trainers with an TrainerID
exports.findOne = (req, res) => {
  exports.findOne = (req, res) => {
    const LoginID = req.params.id;
    Login.findByPk(LoginID)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Login with id=${LoginID}.`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Login with id=" + LoginID
        });
      });
  };
};
// Update a Trainers by the id in the request
exports.update = (req, res) => {
  exports.update = (req, res) => {
    const LoginID = req.params.LoginID;
    Login.update(req.body, {
      where: { LoginID: LoginID }
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Login was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Login with id=${LoginID}. Maybe Login was not found or req.body is empty!`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Login with id=" + LoginID
        });
      });
  };
};
// Delete a Trainers with the specified id in the request
exports.delete = (req, res) => {
  exports.delete = (req, res) => {
    const LoginID = req.params.LoginID;
    Login.destroy({
      where: { LoginID: LoginID }
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Login was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Login with id=${LoginID}. Maybe Login was not found!`
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Login with id=" + LoginID
        });
      });
  };
};
// Delete all Trainers from the database.
exports.deleteAll = (req, res) => {
  Login.destroy({
    where: {},
    truncate: false
  })
    .then((nums) => {
      res.send({ message: `${nums} Login were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all trainers."
      });
    });
};
