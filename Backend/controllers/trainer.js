// Import function from  trainerModel.js
import { getTrainer, insertTrainer, updateTrainerById } from "../models/trainerModel.js";
  
// Get All Trainer
export const showTrainer = (req, res) => {
    getTrainer((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Insert new trainer
export const createTrainer = (req, res) => {
    const data = req.body;
    insertTrainer(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Update trainer
export const updateTrainer = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTrainerById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  