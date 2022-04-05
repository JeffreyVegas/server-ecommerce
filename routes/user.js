const express = require("express");

const {
  register,
  login,
  getUserDetail,
  logout,
} = require("../controllers/userController");
const { isAuthtenticated } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthtenticated, getUserDetail);
router.route("/logout").get(logout);

module.exports = router;
