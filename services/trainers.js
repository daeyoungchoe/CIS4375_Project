const db = require('./db');

async function create(trainer){
    const result = await db.query(
      `INSERT INTO trainer 
      (UserID, TrainerFirstName, TrainerLastName, TrainerPhone, TrainerEmail, EmergencyContactFirstName, EmergencyContactLastName, EmergencyContactPhone, TrainerStatusID, TrainerAddress) 
      VALUES 
      (${trainer.UserID}, ${trainer.TrainerFirstName}, ${trainer.TrainerLastName}, ${trainer.TrainerPhone}, ${trainer.TrainerEmail}, ${trainer.EmergencyContactFirstName}, ${trainer.EmergencyContactLastName}, ${trainer.EmergencyContactPhone}, ${trainer.TrainerStatusID}, ${trainer.TrainerAddress})`
    );
  
    let message = 'Error in creating user';
  
    if (result.affectedRows) {
      message = 'User created successfully';
    }
  
    return {message};
  }

  async function update(id, trainer){
    const result = await db.query(
      `UPDATE client
    SET TrainerFirstName = "${trainer.TrainerFirstName}", TrainerLastName = "${trainer.TrainerLastName}" , TrainerPhone = "${trainer.TrainerPhone}", TrainerEmail = "${trainer.TrainerEmail}", 
    TrainerAddress = "${trainer.TrainerAddress}", EmergencyContactFirstName = "${trainer.EmergencyContactFirstName}", EmergencyContactLastName = "${trainer.EmergencyContactLastName}", 
    EmergencyContactPhone = "${trainer.EmergencyContactPhone}", Weight = "${trainer.Weight}", Height = "${trainer.Height}", TrainerStatusID = "${trainer.TrainerStatusID}""
    WHERE TrainerID=${id}`  
    );
  
    let message = 'Error in updating trainer';
  
    if (result.affectedRows) {
      message = 'Trainer updated successfully';
    }
  
    return {message};
  }

module.exports = {
  create,
  update
}