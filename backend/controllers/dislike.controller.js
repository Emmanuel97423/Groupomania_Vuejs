const db = require("../models");
const DislikeDb = db.DislikeDb;

exports.dislike = (req, res, next) => {
  if (req.body.like === 1) {
    const userIddisLikeTable = {
      userId: req.body.userId,
      postId: req.params.id,
    };
    DislikeDb.create(userIddisLikeTable)
      .then(() => {
        console.log("dislikeDb + " + userIddisLikeTable);
      })
      .catch((err) => console.log(err));
    console.log("je n'aime pas");
    return res.status(200).json({ message: "Post disliké" });
  } else if (req.body.like === 0) {
    console.log("Aucun avis");
    return res.status(200).json({ message: "Aucun avis" });
  }
};

exports.getDislikeCount = (req, res, next) => {
  DislikeDb.findAndCountAll({
    where: { postId: req.params.id },
    limit: 99,
    offset: 12,
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
