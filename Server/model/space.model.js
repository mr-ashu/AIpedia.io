 
const mongoose = require('mongoose');

const spaceSchema = mongoose.Schema({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "signup"
    },
    tool:[{type:String}],
    space_name : {
        type : String,
        required : true,
    },
    description : {
        type : String
    },
    status:{
        type:Boolean,
        default:false
    }
},{
    versionKey : false,
    timestamps : true
});

const spaceModel = mongoose.model("space", spaceSchema);
module.exports = {
 spaceModel
}