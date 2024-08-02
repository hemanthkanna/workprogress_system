
module.exports = (sequelizeInstance, Sequelize) => {
  const Task = sequelizeInstance.define("Task", {
    taskId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    taskDescription: {
      type: Sequelize.TEXT,
    },
    taskStatus: {
      type: Sequelize.STRING,
    },
    deadline: {
      type: Sequelize.DATE,
    },
  });

  const Project = require('./project.model')(sequelizeInstance, Sequelize);
  const Employee = require('./employee.model')(sequelizeInstance, Sequelize);

  Task.belongsTo(Project);
  Task.belongsTo(Employee, { as: "assignedTo" });

  return Task;
};
