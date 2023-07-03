const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");

const deleteController = asyncHandler(async (req, res) =>{
    let _id  = req.params.id;
    try {
        let isExists = await spaceModel.findOne({_id});
        if(!isExists){
            return res.status(400).send({error : "This Space not exists anymore!"})
        }
        /// delete space
        let deleteSpace = await spaceModel.findByIdAndDelete({_id});
        return res.send({msg : "Successfully Deleted!"});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    deleteController
}