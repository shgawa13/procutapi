const asyncHandler = require("express-async-handler");
// this is the products from the DB
const Product = require("../models/productModel");
//@desc GET products
//@route GET /api/products
//@access Privite
const getProducts = asyncHandler(async (req, res) => {
  // find products  using  .find
  const products = await Product.find();
  res.status(200).json({ products });
});

//@desc Create product
//@route POST /api/products
//@access Privite
const createProduct = asyncHandler(async (req, res) => {
  // if there is no kind or name in the request
  if (!req.body.kind || !req.body.amount || !req.body.price) {
    res.status(400);
    throw new Error("Please enter the kind");
  }
  // here we are creating new prodect  throwout the request from thunder client
  /*
  if you want to add more info about the product:
    [1] Go to models/productModels.js and add the info
    [2]add it here 
  */
  const product = await Product.create({
    kind: req.body.kind,
    amount: req.body.amount,
    price: req.body.price,
  });
  res.status(200).json({ product });
});

//@desc Update product
//@route PUT/api/products/:id
//@access Privite
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  // update the product
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ updatedProduct });
});

//@desc Delete product
//@route DELETE/api/products/:id
//@access Privite
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  await product.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
