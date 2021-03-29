const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const disLikeCtrl = require("../controllers/like.controller");

//router.post("/:id", disLikeCtrl.dislike);

module.exports = router;
