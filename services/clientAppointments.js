const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(id, page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT client.ClientLastName AS 'Client Last Name', client.ClientFirstName AS 'Client First Name', trainer.TrainerLastName AS 'Trainer Last Name', trainer.TrainerFirstName AS 'Trainer First Name', trainingtype.TrainingDescription AS 'Training Description', 
    trainingdetails.Price AS 'Price', appointment.AppointmentDate AS 'Appointment Date', appointment.AppointmentDuration AS 'Duration', appointment.AppointmentLocation AS 'Location', appointment.Notes AS 'Notes'
    FROM appointment
    JOIN client ON client.ClientID = appointment.ClientID
    JOIN trainer ON trainer.TrainerID = appointment.TrainerID
    JOIN trainingdetails ON trainingdetails.TrainingDetailsID = appointment.TrainingDetailsID
    JOIN trainingtype ON trainingtype.TrainingID = trainingdetails.TrainingID
    WHERE client.ClientID = ${id} LIMIT ${offset},${config.listPerPage}`
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