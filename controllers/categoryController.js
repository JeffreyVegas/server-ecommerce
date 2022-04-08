const catchAsyncError = require("../middleware/catchAsyncError");
const Category = require("../models/Category");
const ErrorHander = require("../utils/errorHander");

exports.newCategory = catchAsyncError(async (req, res, next) => {
  const category = await Category.create({ name: req.body.name });

  res.status(200).json({
    success: true,
    category,
  });
});

exports.getCategories = catchAsyncError(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).json({
    success: true,
    categories,
  });
});

exports.deleteCategories = catchAsyncError(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) return next(new ErrorHander("category no found", 404));
  await category.remove();
  res.status(200).json({
    success: true,
    message: "category delete Successfully",
  });
});


