module.exports = (sequelize, Sequelize) => {
  const Trainer = sequelize.define("trainer", {
    TrainerFirstName: {
      type: Sequelize.STRING(30),
      //allowNull: true,
    },
    TrainerLastName: {
      type: Sequelize.STRING(45)
      //allowNull: true,
    },
    TrainerPhone: {
      type: Sequelize.STRING(15)
      //allowNull: true,
      // defaultValue: "xxx-xxx-xxxx",
    },
    TrainerEmail: {
      type: Sequelize.STRING(50)
      //allowNull: true,
    },
    TrainerAddress: {
      type: Sequelize.STRING(45)
      //allowNull: true,
    },
    EmergencyContactFirstName: {
      type: Sequelize.STRING(30)
      //allowNull: true,
    },
    EmergencyContactLastName: {
      type: Sequelize.STRING(30)
      //allowNull: true,
    },
    EmergencyContactPhone: {
      type: Sequelize.STRING(15)
      //allowNull: true,
      //  defaultValue: "xxx-xxx-xxxx",
    },
    active: {
      type: Sequelize.BOOLEAN
      //allowNull: true,
    }
  });
  return Trainer;
};
