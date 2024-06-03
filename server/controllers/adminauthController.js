// authController.js
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");

//register
exports.register = async (req, res) => {
  try {
    const emailvalidate = await Admin.findOne({ email: req.body.email });
    if (emailvalidate) {
      return new ErrorResponse(`Email already in use`, 400).sendError(res);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      const hashedconfPass = await bcrypt.hash(req.body.confPassword, salt);
      if (!(req.body.password === req.body.confPassword)) {
        return res
          .status(400)
          .json({ message: "The password does not match!" });
      } else {
        const newAdmin = new Admin({
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
          confPassword: hashedconfPass,
        });
        const admin = await newAdmin.save();
        res.status(200).json(admin);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
//login
exports.login = async (req, res, next) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return next(new ErrorResponse("Wrong credentials!", 400));
    }

    const validated = await bcrypt.compare(req.body.password, admin.password);
    if (!validated) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }

    sendTokenResponse(admin, 200, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
const sendTokenResponse = async (admin, codeStatus, res) => {
  const token = await admin.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ success: true, token, admin });
};

// logout
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
