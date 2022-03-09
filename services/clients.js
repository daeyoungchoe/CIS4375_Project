const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT ClientID, UserID, ClientFirstName, ClientLastName, ClientPhone, ClientEmail, EmergencyContactFirstName, EmergencyContactLastName, EmergencyContactPhone, RegistrationDate, Weight, Height, ClientStatusID, ClientAddress 
    FROM client LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(client){
  const result = await db.query(
    `INSERT INTO client 
    (UserID, ClientFirstName, ClientLastName, ClientPhone, ClientEmail, ClientAddress, EmergencyContactFirstName, EmergencyContactLastName, EmergencyContactPhone, RegistrationDate, Weight, Height, ClientStatusID, ClientZIP) 
    VALUES 
    (${client.UserID}, ${client.ClientFirstName}, ${client.ClientLastName}, ${client.ClientPhone}, ${client.ClientEmail}, ${client.ClientAddress}, ${client.EmergencyContactFirstName}, ${client.EmergencyContactLastName}, ${client.EmergencyContactPhone}, ${client.RegistrationDate}, ${client.Weight}, ${client.Height}, ${client.ClientStatusID}, ${client.ClientZIP})`
  );

  let message = 'Error in creating Client';

  if (result.affectedRows) {
    message = 'Client created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}

