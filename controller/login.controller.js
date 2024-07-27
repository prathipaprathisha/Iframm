const StatusCodes = require("http-status-codes").StatusCodes;
const LoginModal = require("../models/login.model");
const SpErrorHandler = require("../utils/error-handler");
const { Message } = require("../utils/messages");
const Response = require("../utils/response");
const bcrypt = require('bcrypt');








async function checkPassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    console.log('Password match:', match);
    return match;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw new Error('Error comparing passwords');
  }
}
const loginController = {


  async createUser(req,res){
       
    try{
        let{
          username,
          password
        }=req.body;
        
        if(username?.length > 0 && password?.length > 0){
            let org_password = await bcrypt.hash(password,10);

            let payLoad = {
                username,
                password,
                org_password
            }

                let[userResponse] = await LoginModal.createUser(payLoad)
                if(userResponse.affectedRows > 0){
                    res.send({
                        status: true,
                        message: "User Created Successfully...!",
                    })
                }else{
                    res.send({
                        status: false,
                        message: "something went to wrong...!",
                    })
                }
        
        }else{
            res.send({
                status:false,
                message: "Please check mandatory fields !"
            })
        }
    }
    catch(err){
        console.log("Error",err);
    }
},





  async getLogin(req, res) {
    console.log("am here");
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return new Response(res, StatusCodes.BAD_REQUEST)._ErrorMessage(
          "Username and password are required"
        );
      }

      const user = await LoginModal.getByUserName(username);

      if (!user) {
        return new Response(res, StatusCodes.UNAUTHORIZED)._ErrorMessage(
          "Invalid username or password"
        );
      }

      console.log('User found:', user);
      console.log('Password to compare:', password);
      console.log('Hashed password from DB:', user.password);

      const isMatch = await checkPassword(password, user.password);

      if (!isMatch) {
        console.log('Password does not match');
        return new Response(res, StatusCodes.UNAUTHORIZED)._ErrorMessage(
          "Invalid username or password"
        );
      }

      console.log('Password matches');

      // Successful login
      return new Response(res, StatusCodes.OK)._SuccessResponse(
        "Login successful"
      );
    } catch (err) {
      console.log("Error during login:", err);
      return new Response(res, StatusCodes.INTERNAL_SERVER_ERROR)._ErrorMessage(
        "Internal server error"
      );
    }
  },
};
module.exports = loginController;