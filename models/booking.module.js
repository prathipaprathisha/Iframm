const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");

const BookingModule={
async addBooking(bookingData){
   let query = QueryGenerator.insert('fs_booking',bookingData);
    return database.promise().query(query);
},
async getBookingById(bookingId){
    const query = `SELECT * FROM fs_booking WHERE booking_id  = ?`;
    return database.promise().query(query, [bookingId]);

 },
 async updateBooking(bookingData){
    let query = QueryGenerator.update('fs_booking',bookingData);
     return database.promise().query(query);
 },
 async updateBooking(booking_id,projectData){
    let query=QueryGenerator.update('fs_booking',projectData,{ booking_id:booking_id })
    return await database.promise().query(query)
},
async getAllBookings(){
    const query = `SELECT booking_id,booking_no,booking_name,booking_date,booking_price,status,fs_category.category_name  FROM fs_booking join fs_category on fs_category.category_id = booking_category_id`;
    return database.promise().query(query);

 },
 async getAllCategory(){
    const query = `SELECT * FROM fs_category`;
    return database.promise().query(query);

 },
 async getAllSubCategory(){
    const query = `SELECT * FROM fs_sub_category`;
    return database.promise().query(query);

 },
 async getMaxBookingId() {
   
        const query = 'SELECT MAX(booking_id) AS maxId FROM fs_booking';
        const [rows] = await database.promise().query(query);
        return rows[0].maxId;
   
}
}
module.exports = BookingModule;