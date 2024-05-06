const Product = require("../model/product");

let productController = async (req, res) => {
  const { name } = req.body;

  let product = new Product({
    name: name,
    image: `/uploads/${req.file.filename}`,
  });
  product.save();
  res.send({ success: "Product is created" });
};

module.exports = productController;
