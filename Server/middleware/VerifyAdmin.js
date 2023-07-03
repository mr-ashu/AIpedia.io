const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
const {User}=require("../model/user");

const verifyAdmin = asyncHandler(async (req, res, next) =>{
    try {
        let token = req.headers.token || false;
        // if token is not exists
        if(!token){
            return res.status(400).send({error : "You have to login first"});
        }

        // decoded token
        let {_id} = jwt.verify(token, process.env.JWTPRIVATEKEY);

        let user = await User.findOne({_id});
        let isAdmin = user.isAdmin || false;
     
        if(!isAdmin){
            return res.status(400).send({error : "You admin can access"});
        }
        req._id = user._id;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Please login first!" });
    }
});

module.exports = {
    verifyAdmin
}