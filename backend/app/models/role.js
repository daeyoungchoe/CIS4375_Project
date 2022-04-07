
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    RoleID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    RoleName: {
      type: Sequelize.STRING,
    },
  });
  return Role;
};
