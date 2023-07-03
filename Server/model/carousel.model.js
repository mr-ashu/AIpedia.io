const mongoose = require('mongoose');

const carouselSchema = mongoose.Schema({
 first : {
    type : String,
 },
 second : {
    type : String,
 },
 third : {
    type : String
 }
},{
    timestamps : true,
    versionKey : false
});

const carouselModel = mongoose.model("carsusel", carouselSchema);
module.exports = {
    carouselModel
}