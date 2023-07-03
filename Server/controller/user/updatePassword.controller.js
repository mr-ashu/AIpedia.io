const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");
const {User} = require("../../model/user");
const bcrypt = require("bcrypt");

const updatePasswordController = asyncHandler(async (req, res) =>{
    let {email, password} = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()[0].msg });
        }

        let isExists = await User.findOne({email});
        if(!isExists){
            return res.status(400).send({error : "Sorry! you don't have account"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({_id : isExists._id}, {$set : {password : hashPassword}});
        return res.send({msg : "Successfully Update"});
    } catch (error) {
       return res.status(500).send({error : "Something went wrong"})
    }
})

module.exports = {
    updatePasswordController
}