// const { Task } = require("./db.index");

require("./db.index");

module.exports = (sequelizeInstance, Sequelize) => {
  const Employee = sequelizeInstance.define("Employee", {
    employeeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employeeName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employeeEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    employeeMobile: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    employeeRole: {
      type: Sequelize.STRING,
    },
    // employeeSalary: {
    //   type: Sequelize.FLOAT, // Assuming salary is a floating-point number
    // },
  });

  const Task = require("./task.model")(sequelizeInstance,Sequelize);

  Employee.hasMany(Task);

  return Employee;
};
