const express = require("express");
const auth = require("./auth");
const productRoutes = require("./productroutes");
const route = express.Router();

route.use("/auth", auth);
route.use("/product", productRoutes);

module.exports = route;
