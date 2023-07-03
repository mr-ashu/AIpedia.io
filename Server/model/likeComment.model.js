const mongoose = require('mongoose');

const likeCommentSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "signup"
    },
    commentID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "comment"
    }
},{
    versionKey : false,
    timestamps : true
});

const likeCommentModel = mongoose.model("like-comment", likeCommentSchema);
module.exports = {
    likeCommentModel
}