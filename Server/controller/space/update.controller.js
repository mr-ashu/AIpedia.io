const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");

const updateController = asyncHandler(async (req, res) =>{
    let _id  = req.params.id;
    try {
        let isExists = await spaceModel.findOne({_id});
        if(!isExists){
            return res.status(400).send({error : "This Space not exists anymore!"})
        }
        /// update space
        let updateSpace = await spaceModel.findByIdAndUpdate({_id}, req.body);
        return res.send({msg : "Successfully Updated!"});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    updateController
}