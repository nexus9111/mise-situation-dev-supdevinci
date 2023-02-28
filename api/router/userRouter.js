const express = require("express");
const router = express.Router();

const securityUtils = require("../utils/securityUtils");

const controller = require("../controllers/userController");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/profile", securityUtils.authenticate, controller.profile);

module.exports = router;