const express = require("express");
const {
  newCategory,
  getCategories,
} = require("../controllers/categoryController");
const router = express.Router();

router.route("/newCategory").post(newCategory);
router.route("/categories").get(getCategories);

module.exports = router;
