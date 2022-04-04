const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const Trainer = sequelize.define('trainer', {
    TrainerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TrainerFirstName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TrainerLastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    TrainerPhone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "xxx-xxx-xxxx"
    },
    TrainerEmail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmergencyContactFirstName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EmergencyContactLastName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EmergencyContactPhone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "xxx-xxx-xxxx"
    },
    TrainerAddress: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    active: {
      type: Sequelize.BOOLEAN
      //allowNull: true,
    }
  });
  return Trainer;
};