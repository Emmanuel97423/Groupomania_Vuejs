const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const dislikeCtrl = require("../controllers/dislike.controller");

router.post("/:id", auth, dislikeCtrl.dislike);
router.get("/:id", auth, dislikeCtrl.getDislikeCount);

module.exports = router;
