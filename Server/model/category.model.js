const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  
    Title: { type: String, trim: true },
    Category: { type: String, trim: true },
 
},{
    versionKey : false,
    timestamps : true
});

const catModel = mongoose.model("Category", CategorySchema);
module.exports = catModel
 