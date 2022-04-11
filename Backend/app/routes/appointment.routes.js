module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");
    var router = require("express").Router();
    // Create a new appointments
    router.post("/", appointments.create);
    // Retrieve all appointments
    router.get("/", appointments.findAll);
    //Retrive appointments in the last week
    router.get("/LastWeek", appointments.findAllLastWeek);
    //Retrive appointments in the last week
    router.get("/LastMonth", appointments.findAllLastMonth);
    //Retrive appointments in the last year
    router.get("/LastYear", appointments.findAllLastYear);
    // Retrieve all appointments by trainer
    router.get("/TrainerFirstName", appointments.findAllTrainerFirstName);
    // Retrieve a single Client with id
    router.get("/:AppointmentID", appointments.findOne);
    // Update a appointments with id
    router.put("/:AppointmentID", appointments.update);
    // Delete a appointments with id
    router.delete("/:AppointmentID", appointments.delete);
    // Delete all appointments
    router.delete("/", appointments.deleteAll);
    app.use('/api/appointments', router);
  };