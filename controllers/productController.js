const Product = require("../models/Product");
const catchAsyncError = require("../middleware/catchAsyncError");
const cloudinary = require("cloudinary");
const Search = require("../utils/search");

/* 
 1 octener productos
 2 agregar un producto
 3 editar el producto
 4 eliminar el producto
 5 obtener un solo producto
*/

exports.createProduct = catchAsyncError(async (req, res, next) => {
  const images = req.body.images;
  const urlImages = [];

  for (let img of images) {
    const result = await cloudinary.v2.uploader.upload(img, {
      folder: "products",
    });
    urlImages.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = urlImages;
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getProducts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 9;
  const search = new Search(Product.find(), req.query).filter();
  search.pagination(resultPerPage);
  let products = await search.model;
  let filteredProductsCount = products.length;

  res.status(200).json({
    success: true,
    products,
    filteredProductsCount,
    resultPerPage,
  });
});
