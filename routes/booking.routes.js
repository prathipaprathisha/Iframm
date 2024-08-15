
const express = require('express');
var router = express.Router();

const session = require('express-session');
const bodyParser = require('body-parser');

const bookingController = require("../controller/booking.controller");
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');


router.post('/booking_add',verifyTokenMiddleware, bookingController.addBooking);
router.put('/booking_edit/:id', verifyTokenMiddleware, bookingController.editBooking);
router.put('/booking_update/:id', verifyTokenMiddleware, bookingController.updateBooking);
router.get('/booking_view/:id', verifyTokenMiddleware, bookingController.viewBooking);
router.get('/booking_list', verifyTokenMiddleware, bookingController.listBookings);
router.get('/category_list', verifyTokenMiddleware, bookingController.listCategories);
router.get('/sub_category_list', verifyTokenMiddleware, bookingController.listSubCategories);



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

