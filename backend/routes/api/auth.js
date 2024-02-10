const express = require("express");
const route = express.Router();
const registrationController = require("../../controllers/registrationController");
const secureApi = require("../../middleware/secureApi");

route.post("/registration", secureApi, registrationController);

// mernianeccomerce

// mongodb+srv://mernian:cl8UgHdoTM2j0tyk@cluster0.zbatlqd.mongodb.net/mernianeccomerce?retryWrites=true&w=majority

module.exports = route;
