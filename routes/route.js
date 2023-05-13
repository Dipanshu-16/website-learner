const express = require("express");
const router = express.Router();

const { createUsers, login } = require("../Controllers/UserController.js");



router.post("/register", createUsers);
router.post("/login", login)




module.exports = router