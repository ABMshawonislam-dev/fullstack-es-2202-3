const express = require("express");
const route = express.Router();
const registrationController = require("../../controllers/registrationController");
const optController = require("../../controllers/otpController");
const secureApi = require("../../middleware/secureApi");
const loginController = require("../../controllers/loginController");
const linkController = require("../../controllers/linkController");
const forgotPassController = require("../../controllers/forgotPass");
const newPassController = require("../../controllers/newPass");

route.post("/registration", registrationController);
route.post("/login", loginController);
route.post("/otpverification", optController);
route.post("/linkverification", linkController);
route.post("/forgotpass", forgotPassController);
route.post("/newpass", newPassController);

// mernianeccomerce

// mongodb+srv://mernian:cl8UgHdoTM2j0tyk@cluster0.zbatlqd.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

module.exports = route;
