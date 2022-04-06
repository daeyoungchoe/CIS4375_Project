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

db.appointment = require("./appointment.js")(sequelize, Sequelize);
db.trainer = require("./trainer.model.js")(sequelize, Sequelize);
db.client = require("./client.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);
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
db.client.belongsTo(db.user, { as: "User", foreignKey: "id"});
db.user.hasMany(db.client, { as: "clients", foreignKey: "id"});

//trainers - user
db.trainer.belongsTo(db.user, { as: "User", foreignKey: "id"});
db.user.hasMany(db.trainer, { as: "trainer", foreignKey: "id"});

//appointment - trainer
db.appointment.belongsTo(db.trainer, { as: "trainer", foreignKey: "TrainerID"});
db.trainer.hasMany(db.appointment, { as: "appointment", foreignKey: "TrainerID"});

//appointment - client
db.appointment.belongsTo(db.client, { as: "client", foreignKey: "ClientID"});
db.client.hasMany(db.appointment, { as: "appointment", foreignKey: "ClientID"});

//trainingdetail - appointment
db.appointment.belongsTo(db.trainingdetail, { as: "trainingdetail", foreignKey: "TrainingDetailsID"});
db.trainingdetail.hasMany(db.appointment, { as: "appointment", foreignKey: "TrainingDetailsID"});
module.exports = db;