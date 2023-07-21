const asyncHandler = require("express-async-handler");
const catModel = require("../../model/category.model");

const addCat = asyncHandler(async (req, res) =>{
    try {
        let cat= await catModel.insertMany( req.body);
        return res.send(cat)
    } catch (error) {
        console.log(error);
    }
});

module.exports = addCat
