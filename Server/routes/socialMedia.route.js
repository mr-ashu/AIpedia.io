const socialRouter = require('express').Router();
const {addSocialController} = require("../controller/social/addSocial.controller");
const {getSocialController} = require("../controller/social/getSocial.controller");
const {verifyAdmin} = require("../middleware/VerifyAdmin")


socialRouter.route("/add").patch(verifyAdmin, addSocialController);
socialRouter.route("/get").get(getSocialController);

module.exports = {
    socialRouter
}