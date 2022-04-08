
module.exports = function(sequelize, Sequelize) {
  const TrainingDetail = sequelize.define('trainingdetail', {
    TrainingDetailsID: {
      type: Sequelize.INTEGER,
      //allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Price: {
      type: Sequelize.DOUBLE,
      //allowNull: true
    },
    TrainingDescription: {
      type: Sequelize.STRING(45),
      //allowNull: true
    }
  });
  return TrainingDetail;
};
