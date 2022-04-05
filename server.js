const app = require("./app");
const connectDB = require("./config/dataBase");
const cloudinary = require("cloudinary");

connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// app.set("trust proxy", 1);
app.listen("4000", () => {
  console.log(`Server is working on http://localhost:4000`);
});
