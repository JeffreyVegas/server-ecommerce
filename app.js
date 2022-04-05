const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const Errorhander = require("./middleware/error");
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

// routes
const user = require("./routes/user");
const product = require("./routes/product");

app.use("/api/v1", user);
app.use("/api/v1", product);

app.use(Errorhander);

module.exports = app;
