const User = require("../model/userMOdel");

let otpController = async (req, res) => {
  const { email, otp } = req.body;

  let findUser = await User.findOne({ email: email });

  console.log(findUser.otp);

  if (!findUser.emailVerified && findUser.otp == otp) {
    await User.findOneAndUpdate(
      { email: email },
      { otp: "", emailVerified: true }
    );
    res.send("Milse");
  } else {
    res.send("Mile Nai");
  }
};

module.exports = otpController;
