const mongoose = require("mongoose");


const mySpaceSchema = mongoose.Schema({
   userID : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "signup"
   },
   videoID : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "data"
   },
   spaceID : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "space"
   }
},{
    versionKey : false,
    timestamps : true
});

const mySpaceModel = mongoose.model("my-space", mySpaceSchema);
module.exports = {
   mySpaceModel
}