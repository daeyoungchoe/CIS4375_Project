const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const TrainingDetail = sequelize.define('trainingdetail', {
    TrainingDetailsID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TrainingID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'trainingtype',
        key: 'TrainingID'
      }
    }
  }, {
    sequelize,
    tableName: 'trainingdetail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TrainingDetailsID" },
        ]
      },
      {
        name: "FK_trainingtype_trainingdetails_TrainingID",
        using: "BTREE",
        fields: [
          { name: "TrainingID" },
        ]
      },
    ]
  });
  return TrainingDetail;
};
