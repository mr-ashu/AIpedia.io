const asyncHandler = require("express-async-handler");
const {carouselModel} = require("../../model/carousel.model");

const deleteCarouselController = asyncHandler(async (req, res) =>{
    let _id = req.params.id;
    try {
        let carousel = await carouselModel.findByIdAndDelete({_id});
        return res.send({msg : "Successfully Deleted!"})
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    deleteCarouselController
}