module.exports = (sequelize, Sequelize) => {
  const Feedback = sequelize.define("feedback", {
    
    FeedbackID: {
      type: Sequelize.INTEGER,
      //allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
