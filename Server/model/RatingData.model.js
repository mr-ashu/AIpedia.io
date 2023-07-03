const mongoose = require('mongoose');
const ratingSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "signup"
    },
    videoID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "data"
    },
    rating : {
        type : Number,
        trim : true,
        required : true
    }
},{
    versionKey : false,
    timestamps : true
});

const ratingModel = mongoose.model("rating", ratingSchema);
module.exports = {
    ratingModel
}