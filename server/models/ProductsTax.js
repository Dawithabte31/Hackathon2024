const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductTaxSchema = new Schema(
  {
      product_type: {
        type: String,
        required: true,
      },
     turnover_tax:{
      type:Number,
     },
     sur:{
      type:Number,
     },
     customs_tax:{
      type:Number,
     },
     exicise:{
      type:Number,
     },
     vat:{
      type:Number,
     },
     
  },
  { timestamps: true }
);

const ProductsTax = mongoose.model('ProductsTax', ProductTaxSchema);

module.exports = ProductsTax