const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
} = require("../controllers/productController");
const { isAuthtenticated } = require("../middleware/auth");

router.route("/admin/products/new").post(isAuthtenticated, createProduct);
router.route("/products").get(getProducts);

module.exports = router;
