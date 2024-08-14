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
    // Add Booking
    async addBooking(req, res) {
        try {
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
                booking_name
            } = req.body;

            // Validate email and mobile number
            if (!validateEmail(booking_email_id)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid email address",
                    StatusCodes.BAD_REQUEST
                );
            }
            if (!validateMobileNumber(booking_mobile_no)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid mobile number",
                    StatusCodes.BAD_REQUEST
                );
            }

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

            let booking = await BookingModule.addBooking(bookingData);
            if (booking) {
                return new Response(res, StatusCodes.OK)._SuccessResponse(
                    "Booking Created Successfully!"
                );
            }
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
    async editBooking(req, res) {
        try {
            const bookingId = req.params.id;
            let booking = await BookingModule.getBookingById(bookingId);
            
            if (!booking) {
                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking not found", StatusCodes.NOT_FOUND
                );
            }

            return new Response(res, StatusCodes.OK)._SuccessResponse(
                "Booking fetched successfully", booking
            );

        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
    // Update Booking
    async updateBooking(req, res) {
        try {
            let bookingId = req.params.id;
            let updateData = req.body;

            // Optionally validate email and mobile number if included in update
            if (updateData.booking_email_id && !validateEmail(updateData.booking_email_id)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid email address",
                    StatusCodes.BAD_REQUEST
                );
            }
            if (updateData.booking_mobile_no && !validateMobileNumber(updateData.booking_mobile_no)) {
                return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
                    "Please provide a valid mobile number",
                    StatusCodes.BAD_REQUEST
                );
            }

            let booking = await BookingModule.updateBooking(bookingId, updateData);
            if (booking) {
                return new Response(res, StatusCodes.OK)._SuccessResponse(
                    "Booking Updated Successfully!"
                );
            } else {
                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking not found",
                    StatusCodes.NOT_FOUND
                );
            }
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },

    // View Booking (by ID)
    async viewBooking(req, res) {
        try {
            let bookingId = req.params.id;
            let booking = await BookingModule.getBookingById(bookingId);
            if (booking) {
                return new Response(res, StatusCodes.OK)._SuccessResponse(
                    "Booking retrieved successfully!",
                    booking
                );
            } else {
                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking not found",
                    StatusCodes.NOT_FOUND
                );
            }
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },

    // List Bookings
    async listBookings(req, res) {
        try {
            let bookings = await BookingModule.getAllBookings();
            return new Response(res, StatusCodes.OK)._SuccessResponse(
                "Bookings retrieved successfully!",
                bookings
            );
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    }
};

module.exports = BookingController;
