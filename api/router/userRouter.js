const express = require("express");
const router = express.Router();

const securityUtils = require("../utils/securityUtils");

const controller = require("../controllers/userController");

router.post("/register", controller.register);
router.post("/login", controller.login);

// you can use this to protect your route
// router.get("/protected", securityUtils.authorize(["admin"]), controller.mainController);

module.exports = router;