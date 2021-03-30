const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const likeCtrl = require("../controllers/like.controller");

router.post("/:id", auth, likeCtrl.like);
router.get("/:id", auth, likeCtrl.getLikeCount);

module.exports = router;
