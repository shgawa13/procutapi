const mongoose = require("mongoose");
/*
  Here you can add more info about the product
  
*/
const productSchema = mongoose.Schema(
  {
    kind: {
      type: String,
      required: [true, "please add the product kind"],
    },
    amount: {
      type: Number,
      required: [true, "please add the product amount"],
    },
    price: {
      type: Number,
      required: [true, "please add the product price"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
