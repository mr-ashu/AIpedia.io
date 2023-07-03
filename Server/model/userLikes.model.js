const mongoose = require('mongoose');

const userLikesSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "signup"
    },
    videoID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "data"
    }
}, {
    versionKey : false,
    timestamps : true
});

const userLikesModel = mongoose.model("user-like-data", userLikesSchema);
module.exports = {
    userLikesModel
}