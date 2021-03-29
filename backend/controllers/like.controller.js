const db = require("../models");
const Post = db.Post;
const LikeDb = db.LikeDb;

exports.like = (req, res, next) => {
  //Lorsque qu'un utilisateur like
  if (req.body.like == 1) {
    //console.log(req.params.id);
    //const userId = LikeDb.findOne({ where: { userId: req.body.userId } });
    LikeDb.findOne({ where: { userId: req.body.userId } }).then(() => {
      Post.findOne({ where: { id: req.params.id } })
        //Incrémentation du compteur de likes
        .then(() => {
          Post.increment("like", { by: 1, where: { id: req.params.id } })
            .then(() => {
              console.log("like: +1");
            })
            .catch((err) => console.log(err));
        })
        //Ajout à la table likeDb
        .then(() => {
          const userIdTable = {
            userId: req.body.userId,
          };
          LikeDb.create(userIdTable)
            .then(() => {
              console.log("likeDb + " + userIdTable);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    });

    //Lorsque qu'un utilisateur ne like ni ne dislike
  } else if (req.body.like == 0) {
    Post.update(
      { where: { id: req.params.id } },
      { $pull: { usersLiked: req.body.userId } },
      { new: true }
    )
      .then(() => {
        console.log(usersLiked);
      })
      .catch((err) => {
        console.log(err);
      });
    Sauce.update(
      { where: { id: req.params.id } },
      { $inc: { likes: -1 } },
      { new: true }
    )
      .then(() => {
        console.log(likes);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Aucun avis");
    return res.status(200).json({ message: "Aucun avis" });
    //Lorsque qu'un utilisateur dislike
  } else if (req.body.like == -1) {
    Post.update(
      { where: { id: req.params.id } },
      { $push: { usersDisliked: req.body.userId } },
      { new: true }
    )
      .then(() => {
        console.log(usersDisliked);
      })
      .catch((err) => {
        console.log(err);
      });
    Post.update(
      { where: { id: req.params.id } },
      { $inc: { dislikes: +1 } },
      { new: true }
    )
      .then(() => {
        console.log(dislikes);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("je n'aime pas");
    return res.status(200).json({ message: "Post disliké" });
  }
};
