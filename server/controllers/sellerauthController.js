// authController.js
const Seller = require("../models/Seller");
const bcrypt = require("bcryptjs");
const ErrorResponse = require("../utils/errorResponse");

//register
exports.register = async (req, res) => {
  try {
    const emailvalidate = await Seller.findOne({ email: req.body.email });
    if (emailvalidate) {
      return new ErrorResponse(`Email already in use`, 400).sendError(res);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
     
        const newSeller = new Seller({
          fullname: req.body.fullname,
          TIN:req.body.TIN,
          business_type: req.body.business_type,
          tax_type:req.body.tax_type,
          transaction_amount:req.body.transaction_amount,
          capital:req.body.capital,
          email: req.body.email,
          password: hashedPass,
          phone: req.body.phone,
          address: req.body.address,
          username: req.body.username
        });
        const seller = await newSeller.save();
        res.status(200).json(seller);
      
    }
  } catch (err) {
    res.status(500).json(err);
    console.log("error");
  }
};
//login
exports.login = async (req, res, next) => {
  try {
    const seller = await Seller.findOne({email: req.body.email});
    if (!seller) {
      return next(new ErrorResponse("Wrong credentials!", 400));
    }

    const validated = await bcrypt.compare(req.body.password, seller.password);
    if (!validated) {
      return next(new ErrorResponse("Invalid credentials", 400));
    }
    sendTokenResponse(seller, 200, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
const sendTokenResponse = async (seller, codeStatus, res) => {
  const token = await seller.getJwtToken();
  res
    .status(codeStatus)
    .cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
    .json({ success: true, token, seller });
};

// logout
exports.logout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
