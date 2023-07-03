const mongoose = require('mongoose');

const socialSchema = mongoose.Schema({
   userID : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "signup"
   },
   youtube : {
    type : String,
   },
   instagram : {
    type : String
   },
   twitter : {
    type : String
   },
   facebook : {
    type : String
   }
},{
    versionKey : false,
    timestamps : true
});

const socialModel = mongoose.model("social-media", socialSchema);
module.exports = {
    socialModel
}