const asyncHandler = require("express-async-handler");
const { commentModel } = require("../../model/comment.model");
const {dataModel} = require("../../model/data");

const addCommentController = asyncHandler(async (req, res) =>{
    let videoID = req.params.id
    let userID = req._id;
    let {message} = req.body;
    try {
        let createComment = await commentModel.create({videoID, userID, message});
        let comment = await commentModel.find({videoID});
        let length = comment.length;
        await dataModel.findByIdAndUpdate({_id : videoID}, {$set : {comment : length}})
        return res.send({msg : "Successfully Added"});
    } catch (error) {
        return res.status(500).send({error : "Something Went Wrong!"})
    }
});

module.exports = {
    addCommentController
}