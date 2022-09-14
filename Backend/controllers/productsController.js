const asyncHandler = require("express-async-handler");
//@desc GET products
//@route GET /api/products
//@access Privite
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get products" });
});

//@desc Create product
//@route POST /api/products
//@access Privite
const createProduct = asyncHandler(async (req, res) => {
  // if there is no kind or name in the request
  if (!req.body?.kind) {
    res.status(400);
    throw new Error("Please enter the kind");
  }
  res.status(200).json({ message: "Create product" });
});

//@desc Update product
//@route PUT/api/products/:id
//@access Privite
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update product ${req.params.id}` });
});

//@desc Delete product
//@route DELETE/api/products/:id
//@access Privite
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete product ${req.params.id}` });
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
