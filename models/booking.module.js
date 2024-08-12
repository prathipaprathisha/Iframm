const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");

const BookingModule={
async addBooking(bookingData){
   let query = QueryGenerator.insert('fs_booking',bookingData);
    return database.promise().query(query);
}
}
module.exports = BookingModule;