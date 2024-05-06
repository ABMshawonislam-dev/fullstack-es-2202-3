const User = require("../model/userMOdel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");

let registrationController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({ error: "Please Fill the all field" });
  }

  if (password && password.length < 6) {
    return res.send({ error: "Password is too small" });
  }

  let existingUser = await User.find({ email: email });

  console.log(existingUser);

  if (existingUser.length > 0) {
    return res.send({ error: `${email} already in use` });
  } else {
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
    });

    bcrypt.hash(password, 10, async function (err, hash) {
      let user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      });
      user.save();
      jwt.sign({ email: email }, "shhhhh", async function (err, token) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "shawon.cit.bd@gmail.com",
            pass: "nivv mfis ocml hgky",
          },
        });
        const info = await transporter.sendMail({
          from: `"MERINIAN"`,
          to: email,
          subject: "This is Your Verification",
          html: `<a href="http://localhost:5173/emailverification/${token}">Click here</a>`,
        });
      });

      res.send({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    });
  }

  // console.log(name, email, password);

  // res.send(data);
};

module.exports = registrationController;
