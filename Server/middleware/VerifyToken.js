require("dotenv").config()
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');

const verifyToken = asyncHandler(async (req, res,next) =>{
    try {
        let token = req.headers.token || false;
        // if token is not exists
        if(!token){
            return res.status(400).send({error : "You have to login first"});
        }

        // decoded token
        // console.log(token)
        let {_id}= await jwt.verify(token, process.env.JWTPRIVATEKEY);
        // console.log(data)

        req._id = _id;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Please login first!" });
    }
});

module.exports = {
    verifyToken
}