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
            const maxId = await BookingModule.getMaxBookingId();
            const newIdNumber = maxId ? parseInt(maxId, 10) + 1 : 1;
            formattedId = newIdNumber.toString().padStart(3, '0');
             booking_no =   `FS-${formattedId}`;
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
            
            console.log(booking[0],"get edit")

           
            if (!booking[0] || Object.keys(booking[0]).length === 0) {
                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking data not found", StatusCodes.NOT_FOUND
                );
            }
            return new Response(res, StatusCodes.OK)._SuccessResponse(
                "Booking fetched successfully", booking[0]
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
            let updateData = req.body;
            const bookingId = req.params.id;

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
                if (!booking[0] || Object.keys(booking[0]).length === 0) {

                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking data not found",
                    StatusCodes.NOT_FOUND
                );
            } else {
                
                return new Response(res, StatusCodes.OK)._SuccessResponse(
                    "Booking retrieved successfully!",
                    booking[0]
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
                bookings[0]
            );
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
    // List Categories
    async listCategories(req, res) {
        try {
            let Categories = await BookingModule.getAllCategory();
            return new Response(res, StatusCodes.OK)._SuccessResponse(
                "Categories retrieved successfully!",
                Categories[0]
            );
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
    // List Sub Categories
    async listSubCategories(req, res) {
        try {
            let Categories = await BookingModule.getAllSubCategory();
            return new Response(res, StatusCodes.OK)._SuccessResponse(
                "Sub Categories retrieved successfully!",
                Categories[0]
            );
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
    //DELETE Booking by ID
    async deleteBooking(req, res) {
        try {
            let bookingId = req.params.id;
            const result = await BookingModule.findByIdAndDelete(bookingId);
    
                if (!result[0] || Object.keys(result[0]).length === 0) {
    
                return new Response(res, StatusCodes.NOT_FOUND)._ErrorMessage(
                    "Booking data not found",
                    StatusCodes.NOT_FOUND
                );
            } else {
                
                return new Response(res, StatusCodes.OK)._SuccessResponse(
                    "Booking deleted successfully!",
                    result[0]
                );
            }
        } catch (err) {
            new SpErrorHandler(err);
            return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
                "Internal server error"
            );
        }
    },
};

module.exports = BookingController;
