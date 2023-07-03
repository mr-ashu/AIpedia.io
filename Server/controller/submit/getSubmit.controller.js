const asyncHandler = require("express-async-handler");
const {submitModel} = require("../../model/submit.model");

const getSubmitController = asyncHandler(async (req, res) =>{
    try {
       let data =  await submitModel.find();
        return res.send({data});
    } catch (error) {
        return res.status(500).send({error : "Internal error!"});
    }
});

module.exports = {
    getSubmitController
}