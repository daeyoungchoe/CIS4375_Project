const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.trainer = require("./trainer.js")(sequelize, Sequelize);
db.client = require("./client.js")(sequelize, Sequelize);
db.appointment = require("./appointment.js")(sequelize, Sequelize);
db.feedback = require("./feedback.js")(sequelize, Sequelize);
db.trainingdetail = require("./trainingdetail.js")(sequelize, Sequelize);
//db.login = require("./login.js")(sequelize, Sequelize);

db.users = require("../models/user.js")(sequelize, Sequelize);
db.roles = require("../models/role.js")(sequelize, Sequelize);


//User_roles Models 
db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin", "moderator"];

db.appointment.belongsTo(db.client, { as: "Client", foreignKey: "ClientID"});
db.client.hasMany(db.appointment, { as: "appointments", foreignKey: "ClientID"});

db.feedback.belongsTo(db.client, { as: "Client", foreignKey: "ClientID"});
db.client.hasMany(db.feedback, { as: "feedbacks", foreignKey: "ClientID"});


db.appointment.belongsTo(db.trainer, { as: "Trainer", foreignKey: "TrainerID"});
db.trainer.hasMany(db.appointment, { as: "appointments", foreignKey: "TrainerID"});


db.appointment.belongsTo(db.trainingdetail, { as: "TrainingDetail", foreignKey: "TrainingDetailsID"});
db.trainingdetail.hasMany(db.appointment, { as: "appointments", foreignKey: "TrainingDetailsID"});

db.client.belongsTo(db.users, { as: "User", foreignKey: "id"});
db.users.hasMany(db.client, { as: "clients", foreignKey: "id"});

db.trainer.belongsTo(db.users, { as: "User", foreignKey: "id"});
db.users.hasMany(db.trainer, { as: "trainers", foreignKey: "id"});

module.exports = db;