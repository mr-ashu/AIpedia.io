const mySpaceRouter = require('express').Router();
const {verifyToken} = require("../middleware/VerifyToken");
const {addMySpaceController} = require("../controller/MySpace/addMySpace.controller");
const {getMySpaceController} = require("../controller/MySpace/getMySpace.controller");
const {deleteMySpaceController} = require("../controller/MySpace/deleteMySpace.Controller");
const {publicGetMySpaceController} = require("../controller/MySpace/PublicGet.controller")
const { body } = require('express-validator');

mySpaceRouter.route("/add").post([
    body('videoID', "Somthing went wrong video selection").not().isEmpty(),
    body('spaceID', "Somthing went wrong space name selection").not().isEmpty(), 
], verifyToken, addMySpaceController);
mySpaceRouter.route("/get/:id").get(verifyToken, getMySpaceController);
mySpaceRouter.route("/delete/:id").post(verifyToken, deleteMySpaceController);
mySpaceRouter.route("/public/get/:id").get(publicGetMySpaceController);


module.exports = {
   mySpaceRouter
}