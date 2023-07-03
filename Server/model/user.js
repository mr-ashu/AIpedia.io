const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
 userName:{
    type: String,
   
  },
  email: { type: String, required: true },
  phoneNumber: { type: String},

  password: { type: String, required: true },
  image : {type : String, required : true},
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
	versionKey : false,
	timestamps : true
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("signup", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    userName: Joi.string(),
    email: Joi.string().email().required().label("Email"),
    phoneNumber: Joi.string().required().label("Phone Number"),
    password: passwordComplexity().required().label("Password"),
    image: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
