module.exports = app => {
    const appointments = require("../controllers/appointment.controller.js");
    var router = require("express").Router();
    // Create a new appointments
    router.post("/", appointments.create);
    // Retrieve all appointments
    router.get("/", appointments.findAll);

    router.get("/AppointmentLocation", appointments.findAllLocation);
    // Retrieve a single Client with id
    router.get("/:id", appointments.findOne);
    // Update a appointments with id
    router.put("/:id", appointments.update);
    // Delete a appointments with id
    router.delete("/:id", appointments.delete);
    // Delete all appointments
    router.delete("/", appointments.deleteAll);
    app.use('/api/appointments', router);
  };