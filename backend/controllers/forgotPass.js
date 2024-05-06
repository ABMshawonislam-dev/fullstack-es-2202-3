const User = require("../model/userMOdel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

let forgotPassController = async (req, res) => {
  const {email } = req.body;

  let existingUser = await User.find({ email: email });

  console.log(existingUser);

  if (existingUser.length > 0) {
    console.log(existingUser);
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
          subject: "This is Your Change Password Link",
          html: `<a href="http://localhost:5173/newpass/${token}">Click here</a>`,
        });
      });
    // await User.findOneAndUpdate({email:email},{password:})
  } else {
    res.send({ error: "User not found" });
  }

  // console.log(name, email, password);

  // res.send(data);
};

module.exports = forgotPassController;
