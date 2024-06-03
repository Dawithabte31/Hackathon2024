const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    fullname:{
      type: String,
      required: true,
    },
    
    email:{
      type: String,
      required: true,
    },
    phone:{
      type: Number,
      required: true,
    },
    address:{
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
    },
    password:{
      type: String,
      required: true,      
    },
    //at this time the buyers role will be 0 but for the admin it will will be 1 on database 
    //so this model will be used for the buyers and the admins registration 
    user_role:{
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
};

module.exports = mongoose.model("User", UserSchema);
