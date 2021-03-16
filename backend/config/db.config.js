module.exports = {
  HOST: "localhost",
  USER: "dev",
  PASSWORD: "dropknee97460",
  DB: "grouponmania",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
