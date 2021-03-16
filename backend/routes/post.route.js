const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");

//requête POST sauce
router.post("/", postCtrl.create);

module.exports = router;
