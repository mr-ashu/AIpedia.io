const asyncHandler = require("express-async-handler");
const { otpModel } = require("../../model/otp.model");
const { User } = require("../../model/user");
const { validationResult } = require("express-validator");
const { sendMailer } = require("../../asset/sendMail");

const sendOtpEmail = asyncHandler(async (req, res) => {
  let { email } = req.body;
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // if email is not exists
    let isEmail = await User.findOne({ email });
    if (!isEmail) {
      return res.status(400).send({ error: "Please enter a valid email" });
    }

    let isOtpMailExists = await otpModel.findOne({ email: isEmail.email });
    if (isOtpMailExists) {
      await otpModel.findByIdAndDelete({ _id: isOtpMailExists._id });
    }

    let createOtp =
      Math.floor(Math.random() * 10) +
      "" +
      Math.floor(Math.random() * 10) +
      "" +
      Math.floor(Math.random() * 10) +
      "" +
      Math.floor(Math.random() * 10);

    await otpModel.create({ email: isEmail.email, otp: createOtp });
    sendMailer(isEmail.email, createOtp.toString());

    return res.send({ msg: "An OTP send to your email please verify" });
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong!" });
  }
});

module.exports = {
  sendOtpEmail,
};
