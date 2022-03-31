const sql = require("./db.js");
// constructor
const Trainer = function(trainer) {
  this.trainerFirstName = trainer.trainerFirstName;
  this.trainerLastName = trainer.description;
  this.email = trainer.email;
  this.phone = trainer.phone;
  this.address = trainer.address;
};
Trainer.create = (newTrainer, result) => {
  sql.query("INSERT INTO trainer SET ?", newTrainer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created trainer: ", { id: res.insertId, ...newTrainer });
    result(null, { id: res.insertId, ...newTrainer });
  });
};

Trainer.getAll = (id, result) => {
  let query = "SELECT * FROM trainer ";
  if (id) {
    query += ` WHERE id = '%${id}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("trainers: ", res);
    result(null, res);
  });
};

Trainer.updateById = (id, trainer, result) => {
  sql.query(
    "UPDATE trainer SET trainerFirstName = ?, trainerLastName = ?, trainerEmail = ?, trainerPhone = ?, trainerAddress = ? WHERE id = ?",
    [trainer.trainerFirstName, trainer.trainerLastName, trainer.trainerEmail, trainer.trainerPhone, trainer.trainerAddress, trainer.trainerID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Trainer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated trainer: ", { id: id, ...trainer });
      result(null, { id: id, ...trainer });
    }
  );

};
module.exports = Trainer;