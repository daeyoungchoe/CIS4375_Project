const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointmentreminder', {
    ReminderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppointmentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'appointment',
        key: 'AppointmentID'
      }
    },
    ReminderStatus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ResponseDate: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'appointmentreminder',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ReminderID" },
        ]
      },
      {
        name: "Reminder_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ReminderID" },
        ]
      },
      {
        name: "FK_appointment_appointmentreminder_AppointmentID",
        using: "BTREE",
        fields: [
          { name: "AppointmentID" },
        ]
      },
    ]
  });
};
