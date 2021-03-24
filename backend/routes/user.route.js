const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");

//requête POST signup
router.post("/signup", userCtrl.signup);
router.delete("/:id", userCtrl.delete);
router.post("/login", userCtrl.login);
module.exports = router;
