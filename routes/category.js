const express = require("express");
const router = express.Router();

router.route("/newCategory").post(newCategory);
