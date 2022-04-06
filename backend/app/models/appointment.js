
module.exports = function(sequelize,  Sequelize) {
  const Appointment = sequelize.define('appointment', {
   AppointmentID: {
      type: Sequelize.INTEGER,
      //allowNull: false,
      primaryKey: true
    },

    AppointmentDate: {
      type: Sequelize.DATEONLY,
      //allowNull: true
    },
    AppointmentDuration: {
      type: Sequelize.INTEGER,
      //allowNull: true
    },
    AppointmentLocation: {
      type: Sequelize.STRING(45),
      //allowNull: true
    }
  });
  return Appointment;
};
