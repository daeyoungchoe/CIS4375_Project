
module.exports = function(sequelize,  Sequelize) {
  const Appointment = sequelize.define('appointment', {
    TrainerFirstName: {
      type: Sequelize.TEXT,
      //allowNull: true
    },
    TrainerLastName: {
      type: Sequelize.TEXT,
      //allowNull: true
    },
    ClientFirstName: {
      type: Sequelize.TEXT,
      //allowNull: true
    },
    ClientLastName: {
      type: Sequelize.TEXT,
      //allowNull: true
    },
    TrainingType: {
      type: Sequelize.TEXT
      //allowNull: true
    },
    AppointmentDate: {
      type: Sequelize.DATEONLY,
      //allowNull: true
    },
    AppointmentDuration: {
      type: Sequelize.TIME,
      //allowNull: true
    },
    AppointmentLocation: {
      type: Sequelize.STRING(45),
      //allowNull: true
    },
    Notes: {
      type: Sequelize.TEXT,
      //allowNull: true
    }
  });
  return Appointment;
};
