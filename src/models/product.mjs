import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: [true, "Price must be provided"],
  },
  featured: {
    type: "boolean",
    default: false,
  },
  rating: {
    type: "number",
    default: 0,
  },
  createdAt: {
    type: "datetime",
    default: Date.now(),
  },
  company: {
    type: "string",
    enum: {
      values: ["apple", "samsung", "dell", "lenovo"],
      message: `{value} is not supported`,
    },
  },
});

module.exports = mongoose.model('Product', productSchema);