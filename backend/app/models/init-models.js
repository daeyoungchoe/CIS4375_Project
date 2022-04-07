var DataTypes = require("sequelize").DataTypes;
var _appointment = require("./appointment");
var _client = require("./client");
var _feedback = require("./feedback");
var _role = require("./role");
var _sys_config = require("./sys_config");
var _trainer = require("./trainer");
var _trainingdetail = require("./trainingdetail");
var _user = require("./user");

function initModels(sequelize) {
  var appointment = _appointment(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var sys_config = _sys_config(sequelize, DataTypes);
  var trainer = _trainer(sequelize, DataTypes);
  var trainingdetail = _trainingdetail(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

 
  appointment.belongsTo(client, { as: "Client", foreignKey: "ClientID"});
  client.hasMany(appointment, { as: "appointments", foreignKey: "ClientID"});
  feedback.belongsTo(client, { as: "Client", foreignKey: "ClientID"});
  client.hasMany(feedback, { as: "feedbacks", foreignKey: "ClientID"});


  appointment.belongsTo(trainer, { as: "Trainer", foreignKey: "TrainerID"});
  trainer.hasMany(appointment, { as: "appointments", foreignKey: "TrainerID"});


  appointment.belongsTo(trainingdetail, { as: "TrainingDetail", foreignKey: "TrainingDetailsID"});
  trainingdetail.hasMany(appointment, { as: "appointments", foreignKey: "TrainingDetailsID"});
  client.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(client, { as: "clients", foreignKey: "UserID"});


  return {
    appointment,
    client,
    feedback,
    role,
    sys_config,
    trainer,
    trainingdetail,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
