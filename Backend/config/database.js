import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'database-1.cjekeeipgrla.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'autopilot',
  database: 'zekedb'
});
  
export default db;