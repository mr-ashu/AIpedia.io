const asyncHandler = require("express-async-handler");
const {dataModel} = require("../../model/data")

const getSingleDataController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
    try {
        let singleData = await dataModel.findOne({_id});
        return res.send({data : singleData});
    } catch (error) {
        return res.status(500).send({error : "Server time out"}); 
    }
});

module.exports = {
    getSingleDataController
}