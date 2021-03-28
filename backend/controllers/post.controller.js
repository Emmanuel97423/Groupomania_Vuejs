const db = require("../models");
const Post = db.Post;
const Op = db.Sequelize.Op;

// Create and Save a new Post
exports.create = (req, res, next) => {
  // Validate request

  if (!req.body) {
    res.status(400).send({
      message: "Le contenu ne peu pas être vide!",
    });
    return;
  } else {
    // Create a Post

    const post = {
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      //imageUrl: req.body.imageUrl,
      // firstName: req.body.userFirstName,
      userId: req.body.userId,
      // userAvatarUrl: req.body.userAvatarUrl,
      published: req.body.published ? req.body.published : false,
    };
    console.log(post);
    // Save post in the database
    Post.create(post)
      .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
      .catch((error) => res.status(400).json({ error }));
  }
};
//liste des posts
exports.getAllPosts = (req, res, next) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => res.status(400).json({ error }));

  // Find all users
  //const users = await User.findAll();
  //console.log(users.every(user => user instanceof User)); // true
  //console.log("All users:", JSON.stringify(users, null, 2));
};
//GET un post
exports.getOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};
//Supprimer un posts//DEL supprimer une sauce
exports.deletePost = (req, res, next) => {
  console.log("Destroy");
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      Post.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: "Objet supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
