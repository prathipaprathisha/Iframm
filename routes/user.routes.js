var express = require("express");

var router = express.Router();

const loginController = require("../controller/login.controller");


router.post('/login', loginController.getLogin);
router.post('/register',loginController.createUser)




module.exports=router;

