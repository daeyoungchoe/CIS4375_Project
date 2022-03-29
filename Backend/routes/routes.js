// import express
import express from "express";
  
// import function from controller
import { showTrainer,  createTrainer,updateTrainer} from "../controllers/trainer.js";
  
// init express router
const router = express.Router();
  
// Get All trainer
router.get('/trainer', showTrainer);
  

  
// Create New trainer
router.post('/trainers', createTrainer);
  
// Update trainer
router.put('/trainer/:id', updateTrainer);
  

// export default router
export default router;