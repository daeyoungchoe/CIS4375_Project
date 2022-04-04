const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const TrainerStatus = sequelize.define('trainerstatus', {
    TrainerStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TrainerStatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TrainerStatusDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainerstatus',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrainerStatusID" },
        ]
      },
      {
        name: "Trainer_Status_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrainerStatusID" },
        ]
      },
    ]
  });
  return TrainerStatus;
};
