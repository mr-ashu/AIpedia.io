const asyncHandler = require("express-async-handler");
const {carouselModel} = require("../../model/carousel.model");

const addCarouselController = asyncHandler(async (req, res) =>{
    try {
        let carousel = await carouselModel.find();
        if(carousel.length == 0){
            await carouselModel.create(req.body)
        }else{
            let _id = carousel[0]._id;
            await carouselModel.findByIdAndUpdate({_id}, req.body)
        }
        return res.send({msg : "Successfully Added!"})
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    addCarouselController
}