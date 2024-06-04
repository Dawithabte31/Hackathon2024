const mongoose = require("mongoose");
const { Schema } = mongoose;

// database model schema to set constraints to product

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
    product_price: {
      type: Number,
      required: true,
    },
    product_type: {
      type: String,
      required: true,
    },
    product_desc: {
      type: String,
      required: true,
    },
    turnover_tax: {
      type: Number,
    },
    sur: {
      type: Number,
    },
    customs_tax: {
      type: Number,
    },
    exicise: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    seller_id: {
      type: String,
      required: true,
    },
    cartamount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
