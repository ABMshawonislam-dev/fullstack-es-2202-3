const Category = require("../model/categoryModel");

let deleteCategory = async (req, res) => {
  console.log(req.params);

  await Category.findByIdAndDelete(req.params.id);
  res.send("Delete");
};

module.exports = deleteCategory;
