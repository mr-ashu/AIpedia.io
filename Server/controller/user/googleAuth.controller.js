const asyncHandler = require("express-async-handler");
const {User} = require("../../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const key = process.env.JWTPRIVATEKEY;
const salt = 10;


const googleAuthController = asyncHandler(async (req, res) =>{
    let {name, email, password, image} = req.body;
    try {
        let isUser = await User.findOne({email});
        if(isUser){
            // Then Login
            // Check Password
            let hash = await bcrypt.hash(password, salt);
            await User.findByIdAndUpdate({_id : isUser._id}, {password : hash});
            const token = await jwt.sign({ _id : isUser._id }, key);
            return res.send({ data: token,name:isUser.name,image:isUser.image,email:isUser.email, message: "logged in successfully", isAdmin : isUser.isAdmin })
        }else{
            // Then signup and login
            
            // hash password
            let hash = await bcrypt.hash(password, salt);
            // create user
            let user = await User.create({name, password : hash, email, image});
            if(!user){
                return res.status(400).send({error : "Somethig went wrong"});
            }

            const token = await jwt.sign({ _id : user._id }, key);
            
            return res.send({ data: token,name:user.name,image:user.image,email:user.email, message: "logged in successfully", isAdmin : user.isAdmin })



        }
        
    } catch (error) {
        return res.status(500).send({ error: "Server time out", msg: error });
    }
});

module.exports = {
    googleAuthController
}