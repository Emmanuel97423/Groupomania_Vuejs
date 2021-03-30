const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const dislikeCtrl = require("../controllers/dislike.controller");

router.post("/:id", dislikeCtrl.dislike);
router.get("/:id", dislikeCtrl.getDislikeCount);

module.exports = router;
