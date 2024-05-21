const Category = require("../model/categoryModel");

let approveCategory = async (req, res) => {
  const { id, status } = req.body;
  console.log(id, status);
  let updateCat = await Category.findOneAndUpdate(
    { _id: id },
    { status: status == "waiting" ? "approve" : "waiting" },
    { new: true }
  );

  res.send("Updated");
};

module.exports = approveCategory;
