// middleware/verifyTokenMiddleware.js
require('dotenv').config();

const jwt = require('jsonwebtoken');



const verifyTokenMiddleware = (req, res, next) => {
  const rawCookie = req.headers.cookie?.split(';').find(cookie => cookie.trim().startsWith('session='));
  const usertoken = rawCookie ? rawCookie.split('=')[1] : null;
  const token = process.env.JWT_SECRET;

console.log( token,"authorizationHeader")
console.log( usertoken,"token")
  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }
  
  jwt.verify(usertoken, token, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!',err:err });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyTokenMiddleware;
