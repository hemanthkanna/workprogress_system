const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelizeInstance = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelizeInstance = sequelizeInstance;

// Import and initialize the models
db.Test = require("./test.model.js")(sequelizeInstance, Sequelize);
db.Employee = require("./employee.model.js")(sequelizeInstance, Sequelize);
db.Project = require("./project.model.js")(sequelizeInstance, Sequelize);
db.Task = require("./task.model.js")(sequelizeInstance, Sequelize);
db.WorkProgress = require("./workProgress.model.js")(sequelizeInstance, Sequelize);

// Export both the Sequelize instance and the models
module.exports = db;
