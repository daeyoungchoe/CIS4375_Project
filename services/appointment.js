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

  async function update(id, appointment){
    const result = await db.query(
      `UPDATE appointment
      SET Notes = "${appointment.Notes}"
      WHERE AppointmentID = ${id}` 
    );
  
    let message = 'Error in updating appointment';
  
    if (result.affectedRows) {
      message = 'Appointment updated successfully';
    }
  
    return {message};
  }

module.exports = {
  create,
  update
}