const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

const updateAdminDataController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
    try {
        let updateData = await dataModel.findByIdAndUpdate({_id}, req.body);
        return res.send({msg : "Update Successfully!"});
    } catch (error) {
        return res.status(500).send({error : "Server time out"});
    }
});

module.exports = {
    updateAdminDataController
}