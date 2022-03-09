const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT client.ClientID AS 'Client ID', client.ClientLastName AS 'Last Name', client.ClientFirstName AS 'First Name', feedback.FeedbackDate AS 'Feedback Date', feedback.Feedback AS 'Feedback'
    FROM client JOIN feedback ON feedback.ClientID = client.ClientID LIMIT ${offset},${config.listPerPage}`
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