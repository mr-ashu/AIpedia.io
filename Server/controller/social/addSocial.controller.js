const asyncHandler = require("express-async-handler");
const {socialModel} = require("../../model/socialMedia.model");


const addSocialController = asyncHandler(async (req, res) =>{
    let userID = req._id;
    try {
        let isExists = await socialModel.findOne({userID});
        if(isExists){
            await socialModel.findByIdAndUpdate({_id : isExists._id}, req.body);
            return res.send({msg : "Successfully Update"})
        }else{
            await socialModel.create({userID, ...req.body});
            return res.send({msg : "Successfully Created!"})
        }
        
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    addSocialController
}