const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const SellerSchema = new Schema(
  {   
      fullname:{
        type: String,
        required: true,
      },
      TIN:{
        type: Number,
        required: true,
      },
      business_type:{
        type: String,
        required: true,
      },
      tax_type:{
        type: String,
        required: true,
      },
      transaction_amount:{
        type: Number,
        required: true,
      },
      capital:{
        type: Number,
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
      user_role:{
       type:String,
       required:true,
       default:"seller"
      },    
  },
  { timestamps: true }
);
SellerSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
};

const Seller = mongoose.model('Seller',SellerSchema);
module.exports = Seller;
