require("dotenv").config();
const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();
const mongoConfig = require("./config/mongoConfig");
const path = require("path");

mongoConfig();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Port Runnig");
});
