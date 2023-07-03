const asyncHandler = require("express-async-handler");
const { otpModel } = require("../../model/otp.model");
const { validationResult } = require("express-validator");

const verifyOtp = asyncHandler(async (req, res) => {
    let {email, otp} = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0].msg});
    }
    let isEmail = await otpModel.findOne({email});
    if(!isEmail){
        return res.status(400).send({error : "Please resend OTP"});
    }
    // if match the check otp
    if(otp != isEmail.otp){
        return res.status(400).send({error : "Invalid OTP"});
    }

    await otpModel.findByIdAndDelete({_id : isEmail._id});

    return res.send({msg : "Verify"});
  } catch (error) {
    return res
      .status(500)
      .send({ error: "Something went wrong verifying otp!" });
  }
});

module.exports = {
  verifyOtp,
};
