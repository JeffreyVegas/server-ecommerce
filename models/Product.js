const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your product name"],
  },
  description: {
    type: String,
    required: [true, "please enter a product description"],
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
    maxLength: [8, "Price can't exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  stock: {
    type: Number,
    require: [true, "please enter product stock"],
    maxLength: [4, "stock can't exceed 4 character"],
  },
  brand: {
    type: String,
    require: [true, "please enter a brand"],
  },
  numofReviews: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
