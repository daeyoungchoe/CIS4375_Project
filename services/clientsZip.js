const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT client.ClientID AS 'Client ID', client.ClientLastName AS 'Last Name', client.ClientFirstName AS 'First Name', client.ClientZIP AS 'ZIP'
    FROM client WHERE client.ClientZIP IS NOT NULL ORDER BY client.ClientZIP  LIMIT ${offset},${config.listPerPage}`
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