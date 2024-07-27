const express = require("express");
const loginController = require("../controller/login.controller");

const router = express.Router();

router.post('/', loginController.getLogin);

module.exports = router;
