const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Client = sequelize.define('client', {
    ClientID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'UserID'
      }
    },
    ClientStatusID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientstatus',
        key: 'ClientStatusID'
      }
    },
    ClientFirstName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ClientLastName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ClientPhone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "xxx-xxx-xxxx"
    },
    ClientEmail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ClientAddress: {
      type: DataTypes.STRING(45),
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
    RegistrationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('curdate')
    },
    Weight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Height: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ClientZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ClientID" },
        ]
      },
      {
        name: "ClientID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ClientID" },
        ]
      },
      {
        name: "FK_clientstatus_client_ClientStatusID",
        using: "BTREE",
        fields: [
          { name: "ClientStatusID" },
        ]
      },
      {
        name: "FK_user_client_UserID",
        using: "BTREE",
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
  return Client;
};
