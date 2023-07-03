const asyncHandler = require("express-async-handler");
const {carouselModel} = require("../../model/carousel.model");

const getCarouselController = asyncHandler(async (req, res) =>{
    try {
        let carousel = await carouselModel.find();
        return res.send({data : carousel})
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    getCarouselController
}