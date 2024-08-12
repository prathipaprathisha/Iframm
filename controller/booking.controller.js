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
    async addBooking(req, res) {
        console.log("entry");
        try {
            console.log("entryss");

            let {
                booking_no,
                booking_date,
                booking_category_id,
                booking_sub_category_id,
                booking_venue_location,
                booking_venue_name,
                booking_mobile_no,
                booking_email_id,
                booking_price,
                booking_service_id,
                // Add booking_name if it exists in your request body
                booking_name
            } = req.body;

            // Validate email
            if (!validateEmail(booking_email_id)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid email address",
                    StatusCodes.BAD_REQUEST
                );
            }

            // Validate mobile number
            if (!validateMobileNumber(booking_mobile_no)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid mobile number",
                    StatusCodes.BAD_REQUEST
                );
            }

            // Prepare booking data
            var bookingData = {
                booking_no,
                booking_name,
                booking_date,
                booking_category_id,
                booking_sub_category_id,
                booking_venue_location,
                booking_venue_name,
                booking_mobile_no,
                booking_email_id,
                booking_price,
                booking_service_id
            };

            // If booking data is valid, create a booking
            if (bookingData) {
                let booking = await BookingModule.addBooking(bookingData);

                if (booking) {
                    return new Response(res, StatusCodes.OK)._SuccessResponse(
                        "Booking Created Successfully!"
                    );
                }
            }
        } catch (err) {
            // Handle error using SpErrorHandler
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    }
};

module.exports = BookingController;
