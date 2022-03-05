const { app } = require('vertex360/dist/vertex/local');
const db = require('./db');

async function create(appointment){
    const result = await db.query(
      `INSERT INTO appointment 
      (ClientID, TrainingDetailsID, TrainerID, AppointmentDate, AppointmentDuration, AppointmentLocation, Notes) 
      VALUES 
      (${appointment.ClientID}, ${appointment.TrainingDetailsID}, ${appointment.TrainerID}, ${appointment.AppointmentDate}, ${appointment.AppointmentDuration}, ${appointment.AppointmentLocation}, ${appointment.Notes})`
    );
  
    let message = 'Error in creating appointment';
  
    if (result.affectedRows) {
      message = 'Appointment created successfully';
    }
  
    return {message};
  }

module.exports = {
  create
}