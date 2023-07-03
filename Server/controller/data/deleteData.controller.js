const asyncHandler = require("express-async-handler");
const {dataModel} = require("../../model/data")

const deleteDataController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
    try {
     await dataModel.findByIdAndDelete({_id});
     return res.send({msg : "Successfully Deleted"})     
    } catch (error) {
        return res.status(500).send({error : "Server time out"});
    }
});

module.exports = {
    deleteDataController
}