const express = require("express");
const db = require("./models");
//const bodyParser = require("body-parser");
const path = require("path");
const helmet = require("helmet");
const postRoute = require("./routes/post.route");
const userRoute = require("./routes/user.route.js");
const likeRoute = require("./routes/like.route");
const dislikeRoute = require("./routes/dislike.route");
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
//En tête http sécurité
app.use(helmet());
//désactivation de l'en-tête X-Powered-By
app.disable("x-powered-by");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

db.sequelize
  .sync({ force: true })
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
app.use("/api/dislike", dislikeRoute);

module.exports = app;
