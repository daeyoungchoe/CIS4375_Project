const db = require('./db');

async function create(login){
    const result = await db.query(
      `INSERT INTO login 
      (UserID, Username, Password) 
      VALUES 
      (${login.UserID}, ${login.Username}, ${login.Password})`
    );
  
    let message = 'Error in creating login';
  
    if (result.affectedRows) {
      message = 'Login created successfully';
    }
  
    return {message};
  }

module.exports = {
  create
}
