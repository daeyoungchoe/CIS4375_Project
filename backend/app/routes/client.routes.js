module.exports = app => {
    const clients = require("../controllers/client.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/", clients.create);
    // Retrieve all Clients
    router.get("/", clients.findAll);
    // Retrieve a single Client with id
    router.get("/:ClientID", clients.findOne);
    // Update a Client with id
    router.put("/:ClientID", clients.update);
    // Delete a Client with id
    router.delete("/:ClientID", clients.delete);
    // Delete all Clients
    router.delete("/", clients.deleteAll);
    app.use('/api/clients', router);
  };