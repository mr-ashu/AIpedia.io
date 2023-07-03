const asyncHandler = require("express-async-handler");

const {User} = require("../../model/user");

const updateUserController = asyncHandler(async (req, res) =>{
    let _id = req._id
    try {
        await User.findByIdAndUpdate({_id}, req.body);
        return res.send({msg : "Successfully Update"});
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    updateUserController
}