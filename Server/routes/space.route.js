const spaceRouter = require('express').Router();
const {createController} = require("../controller/space/create.controller");
const {deleteController} = require("../controller/space/delete.controller");
const {getController} = require("../controller/space/get.controller");
const {updateController} = require("../controller/space/update.controller");
const {getSpaceDetailsController} = require("../controller/space/getSpaceDetails.controller")
const{verifyToken} = require("../middleware/VerifyToken");
const { body } = require('express-validator');
const {Get_All_Space_name} = require("../controller/space/Get_All_Space_name.controller");

spaceRouter.route("/create").post([
    body('space_name', "Please Select library name").not().isEmpty(),
], verifyToken, createController);
spaceRouter.route("/delete/:id").delete(verifyToken, deleteController);
spaceRouter.route("/update/:id").patch(verifyToken, updateController);
spaceRouter.route("/get").get(verifyToken,getController);
spaceRouter.route("/get/all").get(Get_All_Space_name);
spaceRouter.route("/get/space/:id").get(getSpaceDetailsController);

//token, space_name 

module.exports = {
   spaceRouter
}