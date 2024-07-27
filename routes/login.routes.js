const express = require("express");
const loginController = require("../controller/login.controller");

const router = express.Router();

router.post('/', loginController.getLogin);
router.use('/register',loginController.createUser)


module.exports = router;
