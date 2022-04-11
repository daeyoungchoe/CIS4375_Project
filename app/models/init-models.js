var DataTypes = require("sequelize").DataTypes;
var _appointment = require("./appointment");
var _appointmentreminder = require("./appointmentreminder");
var _client = require("./client");
var _clientstatus = require("./clientstatus");
var _feedback = require("./feedback");
var _login = require("./login");
var _privilege = require("./privilege");
var _role = require("./role");
var _sys_config = require("./sys_config");
var _trainer = require("./trainer");
var _trainerstatus = require("./trainerstatus");
var _trainingdetail = require("./trainingdetail");
var _trainingtype = require("./trainingtype");
var _user = require("./user");

function initModels(sequelize) {
  var appointment = _appointment(sequelize, DataTypes);
  var appointmentreminder = _appointmentreminder(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var clientstatus = _clientstatus(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var login = _login(sequelize, DataTypes);
  var privilege = _privilege(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var sys_config = _sys_config(sequelize, DataTypes);
  var trainer = _trainer(sequelize, DataTypes);
  var trainerstatus = _trainerstatus(sequelize, DataTypes);
  var trainingdetail = _trainingdetail(sequelize, DataTypes);
  var trainingtype = _trainingtype(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  appointmentreminder.belongsTo(appointment, { as: "Appointment", foreignKey: "AppointmentID"});
  appointment.hasMany(appointmentreminder, { as: "appointmentreminders", foreignKey: "AppointmentID"});
  appointment.belongsTo(client, { as: "Client", foreignKey: "ClientID"});
  client.hasMany(appointment, { as: "appointments", foreignKey: "ClientID"});
  feedback.belongsTo(client, { as: "Client", foreignKey: "ClientID"});
  client.hasMany(feedback, { as: "feedbacks", foreignKey: "ClientID"});
  client.belongsTo(clientstatus, { as: "ClientStatus", foreignKey: "ClientStatusID"});
  clientstatus.hasMany(client, { as: "clients", foreignKey: "ClientStatusID"});
  user.belongsTo(role, { as: "Role", foreignKey: "RoleID"});
  role.hasMany(user, { as: "users", foreignKey: "RoleID"});
  appointment.belongsTo(trainer, { as: "Trainer", foreignKey: "TrainerID"});
  trainer.hasMany(appointment, { as: "appointments", foreignKey: "TrainerID"});
  feedback.belongsTo(trainer, { as: "Trainer", foreignKey: "TrainerID"});
  trainer.hasMany(feedback, { as: "feedbacks", foreignKey: "TrainerID"});
  trainer.belongsTo(trainerstatus, { as: "TrainerStatus", foreignKey: "TrainerStatusID"});
  trainerstatus.hasMany(trainer, { as: "trainers", foreignKey: "TrainerStatusID"});
  appointment.belongsTo(trainingdetail, { as: "TrainingDetail", foreignKey: "TrainingDetailsID"});
  trainingdetail.hasMany(appointment, { as: "appointments", foreignKey: "TrainingDetailsID"});
  trainingdetail.belongsTo(trainingtype, { as: "Training", foreignKey: "TrainingID"});
  trainingtype.hasMany(trainingdetail, { as: "trainingdetails", foreignKey: "TrainingID"});
  client.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(client, { as: "clients", foreignKey: "UserID"});
  login.belongsTo(user, { as: "User", foreignKey: "UserID"});
  user.hasMany(login, { as: "logins", foreignKey: "UserID"});

  return {
    appointment,
    appointmentreminder,
    client,
    clientstatus,
    feedback,
    login,
    privilege,
    role,
    sys_config,
    trainer,
    trainerstatus,
    trainingdetail,
    trainingtype,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
