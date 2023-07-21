const asyncHandler = require("express-async-handler");
const {carouselModel} = require("../../model/carousel.model");

const addCarouselController = asyncHandler(async (req, res) =>{
    try {
       let image =carouselModel.find()

      

        await carouselModel.create(req.body)
        return res.send({msg : "Successfully Added!"})
 
      
       
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    addCarouselController
}