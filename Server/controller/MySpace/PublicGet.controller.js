const asyncHandler = require("express-async-handler");
const {mySpaceModel} = require("../../model/mySpace.model");

const publicGetMySpaceController = asyncHandler(async (req, res) =>{
    let spaceID = req.params.id;
    let {page = 1} = req.query;
    let limit = 9;
     try {
        let data = await mySpaceModel.find({spaceID}).populate(["videoID","spaceID","userID"]).limit(limit).skip((page - 1) * limit);
      return res.send({data});
     } catch (error) {
        return res
        .status(500)
        .send({ error: "Something went wrong" });
     }
});

module.exports = {
publicGetMySpaceController
}