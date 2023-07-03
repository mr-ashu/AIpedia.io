const submitRouter = require('express').Router();
const {verifyToken} = require("../middleware/VerifyToken");
const {addSubmitController} = require("../controller/submit/addSubmit.controller");
const {getSubmitController} = require("../controller/submit/getSubmit.controller");


submitRouter.route("/add").post(verifyToken, addSubmitController);
submitRouter.route("/get/all").get(getSubmitController);

module.exports = {
    submitRouter
}