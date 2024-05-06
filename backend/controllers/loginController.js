const bcrypt = require("bcrypt");
const User = require("../model/userMOdel");
var jwt = require("jsonwebtoken");

let loginController = async (req, res) => {
  const { email, password } = req.body;

  let findUser = await User.findOne({ email: email });

  console.log(findUser.password);

  if (findUser) {
    bcrypt.compare(password, findUser.password, function (err, result) {
      // result == true
      console.log(result);
      console.log(findUser);
      var token = jwt.sign(
        { id: findUser._id, email: findUser.email },
        "shhhhh",
        { expiresIn: "24h" }
      );

      if (result) {
        res.send({
          success: "Login Successful",
          token: token,
          email: findUser.email,
          name: findUser.name,
          role: findUser.role,
        });
      } else {
        res.send({ error: "Credencial not matched" });
      }
    });
  } else {
    res.send({ error: "User Not Found" });
  }
};

module.exports = loginController;
