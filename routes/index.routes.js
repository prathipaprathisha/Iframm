var express = require("express");

var router = express.Router();


var LoginRouter = require('./login.routes')

router.use('/login',LoginRouter)

module.exports=router;

