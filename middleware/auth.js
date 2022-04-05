const ErrorHander = require("../utils/errorHander");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthtenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return next(new ErrorHander("Please login to access this resource", 401));
  }

  decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);

  next();
});
