const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientstatus', {
    ClientStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClientStatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ClientStatusDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientstatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ClientStatusID" },
        ]
      },
    ]
  });
};
