const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");

const getController = asyncHandler(async (req, res) =>{
    let userID = req._id;
    try {
        const spaces = await spaceModel.find({userID}).populate("userID");
        return res.send({data : spaces});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    getController
}