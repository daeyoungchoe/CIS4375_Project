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

db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);


//User_roles Models 
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
db.ROLES = ["user", "admin", "moderator"];

db.appointment.belongsTo(db.client, { as: "Client", foreignKey: "ClientID"});
db.client.hasMany(db.appointment, { as: "appointments", foreignKey: "ClientID"});

db.feedback.belongsTo(db.client, { as: "Client", foreignKey: "ClientID"});
db.client.hasMany(db.feedback, { as: "feedbacks", foreignKey: "ClientID"});


db.appointment.belongsTo(db.trainer, { as: "Trainer", foreignKey: "TrainerID"});
db.trainer.hasMany(db.appointment, { as: "appointments", foreignKey: "TrainerID"});


db.appointment.belongsTo(db.trainingdetail, { as: "TrainingDetail", foreignKey: "TrainingDetailsID"});
db.trainingdetail.hasMany(db.appointment, { as: "appointments", foreignKey: "TrainingDetailsID"});

db.client.belongsTo(db.user, { as: "User", foreignKey: "UserID"});
db.user.hasMany(db.client, { as: "clients", foreignKey: "UserID"});

module.exports = db;