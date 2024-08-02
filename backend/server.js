const express = require("express");
const cors = require("cors");
const db = require("./models/db.index");
const testRoutes = require("./routes/test.route");
const employeeRoutes = require("./routes/employee.route");
const projectRoutes = require("./routes/project.route");
const taskRoutes = require("./routes/task.route");
const workProgressRoutes = require("./routes/workProgress.route");
const employeeProjectAndTasksRoute = require("./routes/employeeProjectAndTasks.route");
const dbConfig = require("./config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.json());

db.sequelizeInstance
  .sync()
  .then(() => {
    console.log(`Database Synced to ${dbConfig.DB}`);
  })
  .catch((err) => {
    console.log("Failed to sync DataBase : " + err.message);
  });

//sample route
// app.get("/", (req, res, next) => {
//   res.status(200).json({
//     success: true,
//     message: "new node app for PostgreSQL & Sequelize",
//   });
// });

app.use("/api/v1/test", testRoutes); // Use the test routes
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/project", projectRoutes);
app.use("/api/v1/task", taskRoutes);
app.use("/api/v1/workProgress", workProgressRoutes);
app.use("/api/v1/employees/",employeeProjectAndTasksRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
