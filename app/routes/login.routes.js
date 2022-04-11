module.exports = (app) => {
  const logins = require("../controllers/login.controller.js");
  var router = require("express").Router();
  // Create a new Client
  router.post("/", logins.create);
  // Retrieve all Clients
  router.get("/", logins.findAll);
  // Retrieve a single Client with id
  router.get("/:LoginID", logins.findOne);
  // Update a Client with id
  router.put("/:LoginID", logins.update);
  // Delete a Client with id
  router.delete("/:LoginID", logins.delete);
  // Delete all Clients
  router.delete("/", logins.deleteAll);
  app.use("/api/logins", router);
};
