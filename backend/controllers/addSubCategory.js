const SubCategory = require("../model/subCategoryModel");

let addSubCategorycontroller = async (req, res) => {
  const { name, categoryId } = req.body;
  console.log(name.toLowerCase().trim()); //you have use trim() sothat space is not count in category name. or not use trim() space is count in category name.

  const existingCategory = await SubCategory.find({
    name: name.toLowerCase().trim(),
  });

  if (existingCategory.length > 0) {
    res.send({ error: "Subcategory already exist" });
  } else {
    let category = new SubCategory({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });
    category.save();
    res.send({ success: "Subcategory is created" });
  }
};

module.exports = addSubCategorycontroller;
