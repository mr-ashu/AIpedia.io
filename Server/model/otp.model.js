const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        expires : 36000 // 1 Hour
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const otpModel = mongoose.model("otp", otpSchema);
module.exports = {
  otpModel,
};
