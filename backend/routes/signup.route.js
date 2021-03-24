const express = require("express");
const router = express.Router();
const signupCtrl = require("../controllers/signup.controller");

//requête POST signup
router.post("/", signupCtrl.signup);
router.delete("/:id", signupCtrl.delete);
module.exports = router;
