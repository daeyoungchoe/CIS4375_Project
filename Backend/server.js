const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();
app.use(express.static(path));
var corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize.sync();


require("./app/routes/trainer.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/appointment.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});