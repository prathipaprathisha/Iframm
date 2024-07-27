const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");
const mysql = require('mysql2/promise');

const LoginModal ={

//Get By Username

async getByUserName(username) {
    const query = 'SELECT username, password FROM user_admin WHERE username = ?';

    try {
        const [rows] = await database.promise().query(query, [username]);

        const formattedQuery = database.format(query, [username]);
        console.log('Executing query:', formattedQuery);

        return rows[0] || null;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error; 
    }
}

}

module.exports = LoginModal

