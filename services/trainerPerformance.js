const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT trainer.TrainerID AS 'Trainer ID', trainer.TrainerLastName AS 'Last Name', trainer.TrainerFirstName AS 'First Name', feedback.FeedbackDate AS 'Feedback Date', feedback.Feedback AS 'Feedback'
    FROM trainer JOIN feedback ON feedback.TrainerID = trainer.TrainerID LIMIT ${offset},${config.listPerPage}`
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