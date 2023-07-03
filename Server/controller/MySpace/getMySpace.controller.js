const asyncHandler = require("express-async-handler");
const {mySpaceModel} = require("../../model/mySpace.model");

const getMySpaceController = asyncHandler(async (req, res) =>{
    let userID = req._id;
    let spaceID = req.params.id;
    let {page = 1} = req.query;
    let limit = 9;
     try {
        let data = await mySpaceModel.find({userID, spaceID}).populate(["spaceID","videoID","userID"]).limit(limit).skip((page - 1) * limit);
      return res.send({data});
     } catch (error) {
        return res
        .status(500)
        .send({ error: "Something went wrong" });
     }
});

module.exports = {
    getMySpaceController
}