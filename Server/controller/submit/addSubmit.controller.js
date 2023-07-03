const asyncHandler = require("express-async-handler");
const {submitModel, validate} = require("../../model/submit.model");

const addSubmitController = asyncHandler(async (req, res) =>{
    let userID = req._id;
  
    try {
        const {error}=validate(req.body);
        console.log(error)
        if(error){
            return res.status(400).send({message:error.details[0].message})
           }
           else{
           
        await submitModel.create({userID, ...req.body});
        return res.send({msg : "Successfully Created!"});
           }
    } catch (error) {
        return res.status(500).send({error : "Internal error!"});
    }
});

module.exports = {
    addSubmitController
}