const asyncHandler = require("express-async-handler");
const catModel = require("../../model/category.model");

const getCat = asyncHandler(async (req, res) =>{
    try {
        let cat= await catModel.find();
        return res.send(cat)
    } catch (error) {
        console.log(error);
    }
});

module.exports = getCat 