const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controller");

//requête User signup
router.post("/signup", userCtrl.signup);
router.delete("/:id", userCtrl.delete);
router.post("/login", userCtrl.login);
router.get("/:id", userCtrl.getOneUser);

module.exports = router;
