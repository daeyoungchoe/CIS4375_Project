const db = require('./db');

async function create(user){
    const result = await db.query(
      `INSERT INTO user 
      (RoleID, PrivilegeID) 
      VALUES 
      (${user.RoleID}, ${user.PrivilegeID})`
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
