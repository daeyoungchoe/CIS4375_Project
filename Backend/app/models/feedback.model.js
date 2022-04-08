module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define("feedback", {
    ClientName: {
      type: Sequelize.STRING,
      //allowNull: true
    },
    TrainerName: {
      type: Sequelize.STRING,
      //allowNull: true
    },
    Date: {
      type: Sequelize.DATEONLY,
      //allowNull: true
    },
    RateSession: {
      type: Sequelize.INTEGER,
      //allowNull: true
    },
    RateTrainer: {
      type: Sequelize.INTEGER,
      //allowNull: true
    },
    Comment: {
      type: Sequelize.STRING,
      //allowNull: true
    },
  });
  return Feedback;
};
