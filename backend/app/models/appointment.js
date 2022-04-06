
module.exports = function(sequelize,  Sequelize) {
  const Appointment = sequelize.define('appointment', {
    AppointmentID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TrainerID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'trainers',
        key: 'TrainerID'
      }
    },
    ClientID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'clients',
        key: 'ClientID'
      }
    },
    TrainingDetailsID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'trainingdetails',
        key: 'TrainingDetailsID'
      }
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
