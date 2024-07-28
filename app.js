const express = require("express");
const morgan = require('morgan');
var indexRouter = require('./routes/index.routes');
const cors = require('cors');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/iframe', indexRouter);
const jwt = require("jsonwebtoken"); 

// app.use(function (req, res, next) {
//     next(createError(404));
//   });
//   require('./utils/socket');
  // error handler
//   app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
// });
/* This middleware function is used to verify 
the token before granting access to the user 
to the protected endpoints. If the token is 
invalid it will restrict the user from 
accessing the protected endpoints 
We can use this middleware to any endpoints 
that we desire to make as protected*/

const verifyTokenMiddleware = (req, res, next) => { 
	const { token } = req.body; 
	if (!token) return res.status(403).json({ 
		msg: "No token present"
	}); 
	try { 
		const decoded = jwt.verify(token, 
			process.env.JWT_SECRET_KEY); 
		req.user = decoded; 
	} catch (err) { 
		return res.status(401).json({ 
			msg: "Invalid Token"
		}); 
	} 
	next(); 
}; 

// Modify the home endpoint as below 
// to use the verifyTokenMiddleware 
app.get("/home", verifyTokenMiddleware, (req, res) => { 
	const { user } = req; 
	res.json({ msg: `Welcome ${user.username}` }); 
});

app.listen(5000,()=>{
    console.log("Port Run Localhost:5000");
})