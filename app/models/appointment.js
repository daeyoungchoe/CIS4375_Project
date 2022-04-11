
module.exports = function(sequelize,  Sequelize) {
  const Appointment = sequelize.define("appointment", {
    TrainerFirstName: {
      type: Sequelize.STRING(30),
      //allowNull: true
    },
    TrainerLastName: {
      type: Sequelize.STRING(30),
      //allowNull: true
    },
    ClientFirstName: {
      type: Sequelize.STRING(30),
      //allowNull: true
    },
    ClientLastName: {
      type: Sequelize.STRING(30),
      //allowNull: true
    },
    TrainingType: {
      type: Sequelize.STRING(30),
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
      type: Sequelize.STRING(60),
      //allowNull: true
    },
  });
  return Appointment;
};
