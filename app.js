const express = require("express");
const app = express();
const port = 3000;
const clientsRouter = require("./routes/clients");
const usersRouter = require("./routes/users");
const loginsRouter = require("./routes/logins");
const trainersRouter = require("./routes/trainers");
const appointmentRouter = require("./routes/appointment");
const feedbackRouter = require("./routes/feedback");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

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