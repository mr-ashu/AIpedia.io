const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");
const { validationResult } = require('express-validator');

const createController = asyncHandler(async (req, res) =>{
    let {space_name}= req.body;
    let userID = req._id;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array()[0].msg });
        }

        const create = await spaceModel.create({userID,...req.body});
        return res.send({msg : "Successfully Created space"});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    createController
}
