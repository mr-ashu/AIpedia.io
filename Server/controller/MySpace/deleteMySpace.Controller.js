const asyncHandler = require("express-async-handler");
const {mySpaceModel} = require("../../model/mySpace.model");


const deleteMySpaceController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
    try {
        let isExists = await mySpaceModel.findOne({_id});
        if(!isExists){
            return res.status(400).send({error : "This video not exists!"})
        }
        await mySpaceModel.findByIdAndDelete({_id});
        return res.send({msg : "Successfully Deleted!"});
    } catch (error) {
        return res
        .status(500)
        .send({ error: "Something went in Delete" });
    }
});

module.exports = {
    deleteMySpaceController
}