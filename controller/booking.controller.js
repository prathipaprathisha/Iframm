const { StatusCodes } = require("http-status-codes");
const BookingModule = require("../models/booking.module");
const SpErrorHandler = require("../utils/error-handler");
const Response = require("../utils/response");

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Indian mobile number validation function
function validateMobileNumber(mobile) {
    const regex = /^[789]\d{9}$/;
    return regex.test(mobile);
}

const BookingController = {
    async addBooking(req,res) {
        try {
           let {
    
                booking_no,
                booking_date,
                booking_category,
                booking_sub_category,
                booking_venue_location,
                booking_venue_name,
                booking_mobile_no,
                booking_email_id,
                booking_price,
                booking_service_id
              }=req.body;

                if(!validateEmail(booking_email_id)) {
                    return new Response(res, StatusCodes.BAD_REQUEST, "Please provide a valid email address");

                }
                if(!validateMobileNumber(booking_mobile_no)) {
                    return new Response(res, StatusCodes.BAD_REQUEST, "Please provide valid mobile mobile number");

                }
                var bookingData= {
                    booking_no,
                    booking_date,
                    booking_category,
                    booking_sub_category,
                    booking_venue_location,
                    booking_venue_name,
                    booking_mobile_no,
                    booking_email_id,
                    booking_price,
                    booking_service_id
                }
                if(bookingData) {
                    let booking = await BookingModule.addBooking(bookingData);
                    if(booking){
                        return new Response(res,StatusCodes.OK,"Booking Created Sucessfully !")
                     }
                    }
                } catch(err) {
                    new SpErrorHandler(err);
                    return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR, "An error occurred while creating the booking");

                }
            }
};
module.exports = BookingController;
 