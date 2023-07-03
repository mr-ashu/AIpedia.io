const asyncHandler = require("express-async-handler");
const {mySpaceModel} = require("../../model/mySpace.model");
const { validationResult } = require('express-validator');

const addMySpaceController = asyncHandler(async (req, res) =>{
    let {videoID, spaceID} = req.body
    let userID = req._id;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()[0].msg });
        }
        let createMySpace = await mySpaceModel.create({userID, videoID, spaceID});
        return res.send({msg : "Successfully Added!"})
        
    } catch (error) {
        return res
        .status(500)
        .send({ error: "Something went wrong in add to lobbie" });
    }
});

module.exports = {
    addMySpaceController
}