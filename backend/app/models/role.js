const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RoleName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    RoleDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
      {
        name: "Role_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RoleID" },
        ]
      },
    ]
  });
};
