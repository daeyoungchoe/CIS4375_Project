module.exports = (sequelize, Sequelize) => {
    const Trainer = sequelize.define("trainer", {
      TrainerFirstName: {
        type: Sequelize.STRING
      },
      TrainerLastName: {
        type: Sequelize.STRING
      },
      TrainerPhone: {
        type: Sequelize.STRING
      },
      TrainerEmail: {
        type: Sequelize.STRING
      },
      TrainerAddress: {
        type: Sequelize.STRING
      },
      EmergencyContactFirstName: {
        type: Sequelize.STRING
      },
      EmergencyContactLastName: {
        type: Sequelize.STRING
      },
      EmergencyContactPhone: {
        type: Sequelize.STRING
      }
    });
    return Trainer;
  };