const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res, next) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Le contenu ne peu pas être vide!",
    });
    console.log(req.params);
    return;
  }

  // Create a Post
  const post = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save post in the database
  Post.create(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur est survenue lors de la création d'un post.",
      });
    });
};
