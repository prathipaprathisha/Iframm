const QueryGenerator = require("../generators/query.generator");
const database = require("../utils/database");
const mysql = require('mysql2/promise');

const LoginModal ={

async createUser(data){
    let query = `insert into fs_user_admin(username,password,org_password) values ('${data.username}','${data.org_password}','${data.password}' )`;
    console.log("QUERY",query);
    return database.promise().query(query)
},

//Get By Username

async getByUserName(username) {
    const query = 'SELECT * FROM fs_user_admin WHERE username = ?';

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

