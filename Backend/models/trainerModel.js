// import connection
import db from "../config/database.js";
  
// Get All trainers
export const getTrainer = (result) => {
    db.query("SELECT * FROM trainer", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Insert trainer to Database
export const insertTrainer = (data, result) => {
  db.query("INSERT INTO trainer SET ?", [data], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}

// Update trainer to Database
export const updateTrainerById = (data, id, result) => {
  db.query("UPDATE trainer SET trainerFirstName = ?, TrainerLastName = ?, TrainerPhone = ?, TrainerEmail = ?, TrainerAddress = ? WHERE trainerID = ?"
  , [data.trainerFirstName, data.trainerLastName,data.trainerPhone,data.trainerEmail,data.trainerAddress, trainerID], (err, results) => {             
      if(err) {
          console.log(err);
          result(err, null);
      } else {
          result(null, results);
      }
  });   
}