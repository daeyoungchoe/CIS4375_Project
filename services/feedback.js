const db = require('./db');

async function create(feedback){
    const result = await db.query(
      `INSERT INTO feedback 
      (ClientID, FeedbackDate, Feedback, TrainerID)
      VALUES 
      (${feedback.ClientID}, ${feedback.FeedbackDate}, ${feedback.Feedback}, ${feedback.TrainerID})`
    );
  
    let message = 'Error in creating feedback';
  
    if (result.affectedRows) {
      message = 'Feedback created successfully';
    }
  
    return {message};
  }

module.exports = {
  create
}