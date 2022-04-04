
module.exports = function(sequelize,  Sequelize) {
  const Appointment = sequelize.define('appointment', {

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
