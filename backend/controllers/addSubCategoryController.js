const SubCategory = require("../model/subCategoryModel");

let subCategoryController = async (req, res) => {
  const { name, categoryId } = req.body;

  console.log(name.toLowerCase());
  let existingSubCategory = await SubCategory.find({
    name: name.toLowerCase(),
  });

  console.log(existingSubCategory);
  if (existingSubCategory.length > 0) {
    res.send({ error: "Sub Category already exists" });
  } else {
    let subcat = new SubCategory({
      name: name.toLowerCase(),
      categoryId: categoryId,
    });

    subcat.save();
    res.send({ success: "Sub Category Created" });
  }

};

module.exports = subCategoryController;

// _id: 24565413524
// name: Iphone
// categoryId:660aba04b1a4f3a358b962c8
