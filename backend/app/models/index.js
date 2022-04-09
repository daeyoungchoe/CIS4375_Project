const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trainers = require("./trainer.model.js")(sequelize, Sequelize);
db.clients = require("./client.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);
db.appointment = require("./appointment.js")(sequelize, Sequelize);
db.feedbacks = require("./feedback.model.js")(sequelize, Sequelize);
db.trainingdetail = require("./trainingdetail.js")(sequelize, Sequelize);

//User_roles Models Associate Entity
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//Refresh Token Associate Entity
db.refreshToken.belongsTo(db.user, {
  foreignKey: "userId",
  targetKey: "id",
});
db.user.hasOne(db.refreshToken, {
  foreignKey: "userId",
  targetKey: "id",
});
db.ROLES = ["user", "admin", "moderator"];

//clients - user
db.clients.belongsTo(db.user, { as: "User", foreignKey: "id"});
db.user.hasMany(db.clients, { as: "clients", foreignKey: "id"});

//trainers - user
db.trainers.belongsTo(db.user, { as: "User", foreignKey: "id"});
db.user.hasMany(db.trainers, { as: "trainers", foreignKey: "id"});

//appointment - trainer
db.appointment.belongsTo(db.trainers, { as: "trainers", foreignKey: "TrainerID"});
db.trainers.hasMany(db.appointment, { as: "appointment", foreignKey: "TrainerID"});

//appointment - client
db.appointment.belongsTo(db.clients, { as: "clients", foreignKey: "ClientID"});
db.clients.hasMany(db.appointment, { as: "appointment", foreignKey: "ClientID"});

//trainingdetail - appointment
db.appointment.belongsTo(db.trainingdetail, { as: "trainingdetail", foreignKey: "TrainingDetailsID"});
db.trainingdetail.hasMany(db.appointment, { as: "appointment", foreignKey: "TrainingDetailsID"});

//feedbacks - trainer
db.feedbacks.belongsTo(db.trainers, { as: "trainers", foreignKey: "TrainerID"});
db.trainers.hasMany(db.feedbacks, { as: "feedbacks", foreignKey: "TrainerID"});

//feedbacks - client
db.feedbacks.belongsTo(db.clients, { as: "clients", foreignKey: "ClientID"});
db.clients.hasMany(db.feedbacks, { as: "feedbacks", foreignKey: "ClientID"});


module.exports = db;