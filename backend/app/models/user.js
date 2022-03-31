const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    UserID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
        key: 'RoleID'
      }
    },
    PrivilegeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "User_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
      {
        name: "FK_role_user_RoleID",
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};
