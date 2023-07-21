const asyncHandler = require("express-async-handler");
const catModel = require("../../model/category.model");

const deleteCat = asyncHandler(async (req, res) =>{
   
    let id= req.params.id
   
    try {
        let cat= await catModel.findByIdAndDelete({_id:id});
        return res.send(cat)
    } catch (error) {
        console.log(error);
    }
});

module.exports = deleteCat
 