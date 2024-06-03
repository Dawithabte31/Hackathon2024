const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
      product_name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      photo: {
        type: String,
        required: true,
      },
      product_price:{
        type: Number,
        required: true,
      }
      ,
      product_desc:{
        type:String,
        required: true,
      }
      ,
     product_tax_type:{

     },
     seller_id:{
      type:String,
      required: true,
     }
  },
  { timestamps: true }
);

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products