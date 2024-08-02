const { sequelizeInstance, Sequelize } = require("./db.index");

module.exports = (sequelizeInstance, Sequelize) => {
  const Test = sequelizeInstance.define("test", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Test;
};
