const ErrorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  console.log("Received token:", req.cookies);
  if (!token) {
    return next(new ErrorResponse("not authorized to access this route", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse("not authorized to access this route", 401));
  }
};

//middleware for the admin
