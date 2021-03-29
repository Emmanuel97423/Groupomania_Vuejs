const db = require("../models");
const LikeDb = db.LikeDb;
const DislikeDb = db.DislikeDb;

exports.like = (req, res, next) => {
  //Lorsque qu'un utilisateur like
  if (req.body.like === 1) {
    const userIdLikeTable = {
      userId: req.body.userId,
      postId: req.params.id,
    };
    LikeDb.create(userIdLikeTable)
      .then(() => {
        console.log("likeDb + " + userIdLikeTable);
      })
      .catch((err) => console.log(err));
    return res.status(200).json({ message: "Post liké" });
    //Lorsque qu'un utilisateur ne like ni ne dislike
  } else if (req.body.like === 0) {
    console.log("Aucun avis");
    return res.status(200).json({ message: "Aucun avis" });
    //Lorsque qu'un utilisateur dislike
  } else if (req.body.like === -1) {
    const userIddisLikeTable = {
      userId: req.body.userId,
      postId: req.params.id,
    };
    DislikeDb.create(userIddisLikeTable)
      .then(() => {
        console.log("likeDb + " + userIddisLikeTable);
      })
      .catch((err) => console.log(err));
    console.log("je n'aime pas");
    return res.status(200).json({ message: "Post disliké" });
  }
};

exports.getLikeCount = (req, res, next) => {
  LikeDb.findAndCountAll({
    where: { postId: req.params.id },
    limit: 99,
    offset: 12,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

//exports.getdislikeCount = (req, res, next) => {};
