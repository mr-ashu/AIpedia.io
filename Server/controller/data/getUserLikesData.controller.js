const asyncHandler = require("express-async-handler");
const {userLikesModel} = require("../../model/userLikes.model");

const getUserLikesDataController = asyncHandler(async (req, res) =>{
    let userID = req._id
    try {
        let data = await userLikesModel.find({userID}).populate(["videoID"]);
      
        return res.send({data});
    } catch (error) {
       
        return res.status(500).send({error : "Server time out"});
    }
});

module.exports = {
    getUserLikesDataController
}


