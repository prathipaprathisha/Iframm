var express = require("express");

var router = express.Router();


var UserRoutes = require('./user.routes')

router.use('/user',UserRoutes)


module.exports=router;

