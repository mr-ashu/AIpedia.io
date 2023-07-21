const mongoose = require('mongoose');

const carouselSchema = mongoose.Schema({
 img : {
    type : String,
   
 },
 url : {
    type : String,
 },
 
},{
    timestamps : true,
    versionKey : false
});

const carouselModel = mongoose.model("carsusel", carouselSchema);
module.exports = {
    carouselModel
}