
const express = require('express');
var router = express.Router();

const session = require('express-session');
const bodyParser = require('body-parser');

const bookingController = require("../controller/booking.controller");
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');


router.post('/booking_add',verifyTokenMiddleware, bookingController.addBooking);





const app = express();

// Middleware to parse request bodies (if you're sending JSON or URL-encoded form data)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with a strong secret
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));



module.exports=router;

