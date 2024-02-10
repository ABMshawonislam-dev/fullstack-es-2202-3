const mongoose = require("mongoose");

let mongoConfig = () => {
  mongoose
    .connect(
      "mongodb+srv://mernian:cl8UgHdoTM2j0tyk@cluster0.zbatlqd.mongodb.net/mernianeccomerce?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database Connected!"));
};

module.exports = mongoConfig;
