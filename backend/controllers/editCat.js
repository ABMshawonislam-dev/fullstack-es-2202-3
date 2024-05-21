const Category = require("../model/categoryModel");

let editCategorycontroller = async (req, res) => {
  const { name, oldname } = req.body;
  console.log(oldname);
  const existingCategory = await Category.find({
    name: name,
  });

  if (existingCategory.length > 0) {
    res.send({ error: "Category already exist" });
  } else {
    let a = await Category.findOneAndUpdate(
      { name: oldname },
      {
        name: name,
      },
      { new: true }
    );

    console.log(a);

    res.send({ success: "Category Updated" });
  }
};

module.exports = editCategorycontroller;
