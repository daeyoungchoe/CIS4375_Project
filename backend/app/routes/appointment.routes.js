module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");
    var router = require("express").Router();
    // Create a new appointments
    router.post("/", appointments.create);
    // Retrieve all appointments
    router.get("/", appointments.findAll);
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