const mongoose = require('mongoose');

const likeSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "signup"
    },
    videoID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "data"
    }
},{
    versionKey : false,
    timestamps : true
});

const likeModel = mongoose.model("like", likeSchema);
module.exports = {
   likeModel
}