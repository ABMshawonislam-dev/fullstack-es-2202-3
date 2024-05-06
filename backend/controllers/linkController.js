const User = require("../model/userMOdel");
const jwt = require("jsonwebtoken");
let linkController = async (req, res) => {
  const { token } = req.body;

  var decoded = jwt.verify(token, "shhhhh");

  console.log(decoded.email);

    let findUser = await User.findOne({ email: decoded.email });
    console.log(findUser.otp);

  

    if (!findUser.emailVerified) {
      await User.findOneAndUpdate(
        { email: decoded.email },
        {  emailVerified: true }
      );
      res.send("Milse");
    } else {
      res.send("Mile Nai");
    }
};

module.exports = linkController;
