const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const TrainingDetail = sequelize.define('trainingdetail', {
    TrainingDetailsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TrainingDescription: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  });
  return TrainingDetail;
};
