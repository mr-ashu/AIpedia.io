const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");


const getSpaceDetailsController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
 try {
    let data = await spaceModel.findOne({_id});
    return res.send({data});
 } catch (error) {
    return res.status(500).send({error : "Internal error!"})
 }
});

module.exports = {
    getSpaceDetailsController
}