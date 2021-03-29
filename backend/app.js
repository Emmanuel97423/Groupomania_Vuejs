const express = require("express");
const db = require("./models");
//const bodyParser = require("body-parser");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.route.js");
const likeRoute = require("./routes/like.route");
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

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

db.sequelize
  .sync({ force: false })
  .then((req) => {
    console.log("Connection à la base de données msql réussi.");
  })
  .catch((err) => {
    console.error("Impossible de se connecté à la base de donnée:", err);
  });

app.use("/api/post", postRoute);
app.use("/api/user", userRoute);
//Routes de likes
app.use("/api/like", likeRoute);

module.exports = app;
