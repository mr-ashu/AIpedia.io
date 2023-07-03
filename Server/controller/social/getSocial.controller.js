const asyncHandler = require("express-async-handler");
const {socialModel} = require("../../model/socialMedia.model");


const getSocialController = asyncHandler(async (req, res) =>{
    try {
        let social = await socialModel.find();
        return res.send({data : social});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    getSocialController
}