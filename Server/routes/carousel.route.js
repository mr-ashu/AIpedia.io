const carouselRouter = require('express').Router();
const {getCarouselController} = require("../controller/carousel/getCarousel.controller");
const {addCarouselController} = require("../controller/carousel/addCarousel.controller");
const {deleteCarouselController} = require("../controller/carousel/deleteCarousel.controller")

carouselRouter.route("/add").patch(addCarouselController);
carouselRouter.route("/get").get(getCarouselController);
carouselRouter.route("/delete/:id").delete(deleteCarouselController);

module.exports = {
    carouselRouter
}