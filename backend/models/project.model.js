
module.exports = (sequelizeInstance, Sequelize) => {
  const Project = sequelizeInstance.define("Project", {
    projectId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deadline: {
      type: Sequelize.DATE,
    },
  });

  return Project;
};
