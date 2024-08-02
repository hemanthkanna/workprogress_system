module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "kanna",
  DB: "PPR",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

