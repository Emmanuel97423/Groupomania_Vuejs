const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");
const db = require("./models");
const bodyParser = require("body-parser");
const postRoute = require("./routes/post.route");
const app = express();

//Requête CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log("Connection à la base de données msql réussi.");
  })
  .catch((err) => {
    console.error("Impossible de se connecté à la base de donnée:", err);
  });

app.use("/api/post", postRoute);

module.exports = app;
