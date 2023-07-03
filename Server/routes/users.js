const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../model/user");
const {verifyToken} = require("../middleware/VerifyToken");
const {updateUserController} = require("../controller/user/updateUser.controller")
const { body } = require("express-validator");
const {updatePasswordController} = require("../controller/user/updatePassword.controller");
const {googleAuthController} = require("../controller/user/googleAuth.controller");

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      //Number(proces.env.SALT)
      const salt = bcrypt.genSaltSync(10);

      const hashPassword = bcrypt.hashSync(req.body.password, salt);

      await new User({ ...req.body, password: hashPassword }).save();
      res.status(201).send({ message: "User created successfully" });
       
    } else {
      if (user.isAdmin && user.password) {
        return res
          .status(400)
          .send({ message: "You have already signup please login" });
      } else if (user.isAdmin) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        await User.findByIdAndUpdate({_id : user._id}, {...req.body, password: hashPassword});
        // await new User({ ...req.body, password: hashPassword }).save();
        return res.status(201).send({ message: "Admin created successfully" });
      } else {
        return res
          .status(409)
          .send({ message: "User with given email already exist" });
      }
    }

     
  } catch (error) {
    res.status(500).send({ message: "internal Server Error" });
  }
});
router.route("/update").patch(verifyToken, updateUserController);
router.route('/update/password').patch([
  body("email", "Enter a valid email").isEmail(),
], updatePasswordController);
router.route("/google/auth").post(googleAuthController);
module.exports = router;
