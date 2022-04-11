const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('privilege', {
    PrivilegeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PrivilegeName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PrivilegeDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'privilege',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PrivilegeID" },
        ]
      },
    ]
  });
};
