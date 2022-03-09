const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT client.ClientID AS 'Client ID',client.ClientLastName AS 'Last Name', client.ClientFirstName AS 'First Name', clientstatus.ClientStatus AS 'Status', clientstatus.ClientStatusDescription AS 'Status Description'
    FROM clientstatus JOIN client ON client.ClientStatusID = clientstatus.ClientStatusID WHERE clientstatus.ClientStatus = 'Active' LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
    getMultiple
  }