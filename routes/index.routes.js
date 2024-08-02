var express = require("express");

var router = express.Router();


var UserRoutes = require('./user.routes')
var BookingRoutes = require('./booking.routes')

router.use('/user',UserRoutes)
router.use('/booking',BookingRoutes)


module.exports=router;

