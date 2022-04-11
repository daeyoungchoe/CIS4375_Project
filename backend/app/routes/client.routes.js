module.exports = app => {
  const clients = require("../controllers/client.controller.js");
  var router = require("express").Router();
  // Create a new Client
  router.post("/", clients.create);
  // Retrieve all Clients
  router.get("/", clients.findAll);
  // Retrieve all active Clients
  router.get("/active", clients.findAllActive);
  //Retrive all inactive Clients
  router.get("/inactive", clients.findAllInactive);
  // Retrieve all Trainer by Zip code
  router.get("/ClientZip", clients.findAllZipCode);
  // Retrieve a single Client with id
  router.get("/:id", clients.findOne);
  // Update a Client with id
  router.put("/:id", clients.update);
  // Delete a Client with id
  router.delete("/:id", clients.delete);
  // Delete all Clients
  router.delete("/", clients.deleteAll);
  app.use("/api/clients", router);
};