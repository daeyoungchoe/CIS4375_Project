const Sequelize = require('sequelize');
const { trainingtype } = require('.');
module.exports = function(sequelize, DataTypes) {
  const TrainingType = sequelize.define('trainingtype', {
    TrainingID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TrainingDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingtype',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrainingID" },
        ]
      },
      {
        name: "TrainingID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrainingID" },
        ]
      },
    ]
  });
  return TrainingType;
};
