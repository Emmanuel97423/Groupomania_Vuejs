const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

//requête POST sauce
router.post("/", auth, multer, postCtrl.create);
router.get("/", auth, multer, postCtrl.getAllPosts);
router.get("/:id", auth, multer, postCtrl.getOnePost);
router.delete("/:id", auth, multer, postCtrl.deletePost);

module.exports = router;
