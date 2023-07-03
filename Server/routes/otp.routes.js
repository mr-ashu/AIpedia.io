const otpRouter = require("express").Router();
const { body } = require("express-validator");
const { sendOtpEmail } = require("../controller/auth/sendOtpEmail");
const {verifyOtp} = require("../controller/auth/verifyOtp")

otpRouter
  .route("/verifyEmail")
  .post([body("email", "Enter a valid email").isEmail()], sendOtpEmail);

otpRouter.route("/verifyOtp").post([
    body("email", "Enter a valid email").isEmail(),
    body("otp", "Enter a valid OTP").isLength({ min: 4, max : 4 })
], verifyOtp);

module.exports = {
  otpRouter,
};
