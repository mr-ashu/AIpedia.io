const asyncHandler = require("express-async-handler");
const { commentModel } = require("../../model/comment.model");

const getCommentController = asyncHandler(async (req, res) =>{
    let videoID = req.params.id
    try {
        let comment = await commentModel.find({videoID}).populate(["userID"]);
        return res.send({comment})
    } catch (error) {
        return res.status(500).send({error : "Something Went Wrong!"})
    }
});

module.exports = {
    getCommentController
}