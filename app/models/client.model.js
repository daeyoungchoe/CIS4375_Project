module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    ClientFirstName: {
      type: Sequelize.STRING(30),
      //allowNull: true,
    },
    ClientLastName: {
      type: Sequelize.STRING(45),
      //allowNull: true,
    },
    ClientPhone: {
      type: Sequelize.STRING(15),
      //allowNull: true,
      //defaultValue: "xxx-xxx-xxxx",
    },
    ClientEmail: {
      type: Sequelize.STRING(50),
      // allowNull: true,
    },
    ClientAddress: {
      type: Sequelize.STRING(45),
      //allowNull: true,
    },
    ClientZip: {
      type: Sequelize.INTEGER(10),
      //allowNull: true,
    },
    EmergencyContactFirstName: {
      type: Sequelize.STRING(30),
      //allowNull: true,
    },
    EmergencyContactLastName: {
      type: Sequelize.STRING(30),
      //allowNull: true,
    },
    EmergencyContactPhone: {
      type: Sequelize.STRING(15),
      //allowNull: true,
      //defaultValue: "xxx-xxx-xxxx",
    },
    Weight: {
      type: Sequelize.INTEGER(45),
      //allowNull: true,
    },
    Height: {
      type: Sequelize.STRING(45),
      //allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      //allowNull: true,
    },
  });
  return Client;
};