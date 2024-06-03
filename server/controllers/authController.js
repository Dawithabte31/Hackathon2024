// authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");

//register
exports.register = async (req, res) => {
  try {
    const emailvalidate = await User.findOne({ email: req.body.email });
    if (emailvalidate) {
      return new ErrorResponse(`Email already in use`, 400).sendError(res);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
     
        const newUser = new User({
          fullname: req.body.fullname,
          email: req.body.email,
          password: hashedPass,
          phone: req.body.phone,
          address: req.body.address,
          username: req.body.username
        });
        const user = await newUser.save();
        res.status(200).json(user);
      
    }
  } catch (err) {
    res.status(500).json(err);
    console.log("error");
  }
};
//login
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) {
      return next(new ErrorResponse("Wrong credentials!", 400));
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }
    sendTokenResponse(user, 200, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
const sendTokenResponse = async (user, codeStatus, res) => {
  const token = await user.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ success: true, token, user });
};

// logout
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
