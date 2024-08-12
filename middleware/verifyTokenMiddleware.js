const jwt = require('jsonwebtoken');


function verifyToken(req, res, next) {
const token = req.header('Authorization');
console.log(token,"tokenss")
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token, 'your-secret-key');
 console.log(decoded.userId,"decoded.userId")
 console.log(token,"tokentoken")
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken