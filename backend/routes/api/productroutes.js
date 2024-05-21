const express = require("express");
const route = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const addCategoryController = require("../../controllers/addCategoryController");
const addSubCategoryController = require("../../controllers/addSubCategory");
const viewCategoryController = require("../../controllers/viewCategoryController");
const viewSubCategoryController = require("../../controllers/viewSubCategoryController");

const verifyToken = require("../../middleware/verifyToken");
const secureApi = require("../../middleware/secureApi");
const productController = require("../../controllers/productController");
const allProController = require("../../controllers/allPro");
const approveCategory = require("../../controllers/approveCategory");
const deleteCategory = require("../../controllers/deleteCategory");
const editCategoryController = require("../../controllers/editCat");

route.post("/createcategory", secureApi, verifyToken, addCategoryController);
route.post("/approvecategory", approveCategory);
route.post("/createsubcategory", addSubCategoryController);
route.post("/createproduct", upload.single("avatar"), productController);
route.post("/editcat", editCategoryController);
route.delete("/deletecategory/:id", deleteCategory);

route.get("/allcat", viewCategoryController);
route.get("/allsubcat", viewSubCategoryController);
route.get("/allpro", allProController);

// mernianeccomerce

// mongodb+srv://mernian:cl8UgHdoTM2j0tyk@cluster0.zbatlqd.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

module.exports = route;
