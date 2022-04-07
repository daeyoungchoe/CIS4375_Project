const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Feedback = sequelize.define('feedback', {
    FeedbackID: {
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
    FeedbackDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Feedback: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feedback',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FeedbackID" },
        ]
      },
      {
        name: "Feedback_ID_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FeedbackID" },
        ]
      },
      {
        name: "FK_client_feedback_ClientID",
        using: "BTREE",
        fields: [
          { name: "ClientID" },
        ]
      },
    ]
  });
  return Feedback;
};
