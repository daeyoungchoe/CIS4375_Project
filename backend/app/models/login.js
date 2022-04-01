const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Login = sequelize.define('login', {
      LoginID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "user",
          key: "UserID",
        },
      },
      Username: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      Password: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    }, {
      sequelize,
      tableName: "login",
      timestamps: false,
      indexes: [{
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{
            name: "LoginID"
          }],
        },
        {
          name: "FK_user_login_UserID",
          using: "BTREE",
          fields: [{
            name: "UserID"
          }],
        },
      ],
    }
  );
  return Login;
};