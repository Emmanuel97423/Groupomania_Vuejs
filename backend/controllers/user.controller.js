const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const datamask = require("datamask");

//Création ustilisateur dans la base de donnée mysql
exports.signup = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Le contenu ne peu pas être vide" });
    return;
  } else {
    // Validate request
    User.findOne({
      where: { email: req.body.email },
    }).then((email) => {
      if (email) {
        return res
          .status(401)
          .json({ message: "Cette adresse email est déjà inscrit" });
      } else {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            const superAdmin = () => {
              if (req.body.email == "admin@groupomnia.com") {
                return true;
              }
            };
            const user = {
              firstName: req.body.firstName,
              userId: req.params.id,
              email: datamask.email(req.body.email, "#", 45, 80),
              password: hash,
              avatarUrl: req.body.avatarUrl,
              isSuperAdmin: superAdmin(),
            };
            User.create(user)
              .then(() =>
                res.status(201).json({ message: "Utilisateur créé !" })
              )
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(500).json({ error }));
      }
    });
  }
};
exports.login = (req, res, next) => {
  console.log(req.body.email);
  User.findOne({
    where: { email: datamask.email(req.body.email, "#", 45, 80) },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
exports.delete = (req, res, next) => {
  const id = req.params.id;
  User.destroy({ where: { id: id } })
    .then(() => res.status(200).json({ message: "Utilisateur supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send({ message: "Une erreur est survenue" });
    });
};
