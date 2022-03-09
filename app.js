const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require("express");
const app = express();
const port = 3000;
const clientsRouter = require("./routes/clients");
const usersRouter = require("./routes/users");
const loginsRouter = require("./routes/logins");
const trainersRouter = require("./routes/trainers");
const appointmentRouter = require("./routes/appointment");
const feedbackRouter = require("./routes/feedback");
const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

}

vertex.configureApp(app, config)

const main = require('./routes/main')
app.use('/', main)

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/clients", clientsRouter);

app.use("/users", usersRouter);

app.use("/logins", loginsRouter);

app.use("/trainers", trainersRouter);

app.use("/appointment", appointmentRouter);

app.use("/feedback", feedbackRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`phezeke app listening at http://localhost:${port}`);
});


module.exports = app
