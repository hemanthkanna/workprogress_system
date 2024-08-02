module.exports = (sequelizeInstance, Sequelize) => {
  const WorkProgress = sequelizeInstance.define("WorkProgress", {
    progressId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    progressDate: {
      type: Sequelize.DATE,
    },
    hoursWorked: {
      type: Sequelize.INTEGER,
    },
  });

  const Task = require("./task.model")(sequelizeInstance, Sequelize);
  const Employee = require("./employee.model")(sequelizeInstance, Sequelize);

  WorkProgress.belongsTo(Task);
  WorkProgress.belongsTo(Employee);

  return WorkProgress;
};
