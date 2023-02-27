const express = require("express");
const router = express.Router();

const securityUtils = require("../utils/securityUtils");

const controller = require("../controllers/companyController");

router.get("/", controller.getCompanies);
router.post("/comment", securityUtils.authenticate, controller.comment);

module.exports = router;