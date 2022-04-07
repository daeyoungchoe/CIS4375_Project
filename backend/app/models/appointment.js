const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Appointment = sequelize.define('appointment', {
    AppointmentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ClientID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'client',
        key: 'ClientID'
      }
    },
    TrainingDetailsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trainingdetail',
        key: 'TrainingDetailsID'
      }
    },
    TrainerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trainer',
        key: 'TrainerID'
      }
    },
    AppointmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    AppointmentDuration: {
      type: DataTypes.TIME,
      allowNull: true
    },
    AppointmentLocation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appointment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AppointmentID" },
        ]
      },
      {
        name: "Appointment_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "AppointmentID" },
        ]
      },
      {
        name: "FK_client_appointment_ClientID",
        using: "BTREE",
        fields: [
          { name: "ClientID" },
        ]
      },
      {
        name: "FK_trainers_appointment_TrainerID",
        using: "BTREE",
        fields: [
          { name: "TrainerID" },
        ]
      },
      {
        name: "FK_trainingdetails_appointment_TrainingDetailsID",
        using: "BTREE",
        fields: [
          { name: "TrainingDetailsID" },
        ]
      },
    ]
  });
  return Appointment;
};
