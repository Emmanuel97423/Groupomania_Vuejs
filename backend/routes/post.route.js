const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post.controller");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

//requête POST sauce
router.post("/", multer, postCtrl.create);
router.get("/", multer, postCtrl.getAllPosts);
router.get("/:id", multer, postCtrl.getOnePost);
router.delete("/:id", multer, postCtrl.deletePost);

module.exports = router;
