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

module.exports = {
  create
}