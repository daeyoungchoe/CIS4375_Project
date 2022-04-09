const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const path = __dirname + '/app/views/';
const app = express();
var corsOptions = {
  origin: "http://localhost:3001",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// database
const db = require("./app/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to bezkoder application."
  });
});
//routes
require("./app/routes/trainer.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/appointment.routes")(app);
require("./app/routes/feedback.routes")(app);

require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});