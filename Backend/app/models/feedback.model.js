module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define("feedback", {
    ClientFirstName: {
      type: Sequelize.STRING,
      //allowNull: true
    },
    ClientLastName: {
      type: Sequelize.STRING,
      //allowNull: true
    },
    TrainerFirstName: {
      type: Sequelize.STRING,
      //allowNull: true
    },
    TrainerLastName: {
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
