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
db.login = require("./login.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);

db.role.belongsToMany(db.login, {
  through: "user_roles",
  foreignKey: "RoleID",
  otherKey: "LoginID",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "LoginID",
  otherKey: "RoleID",
});
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;