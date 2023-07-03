const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");

const Get_All_Space_name = asyncHandler(async (req, res) =>{
    const {search} = req.query;
    try {
        let query = {
            status : false
        }
        if(search){
            query = {
                ...query,
                space_name : { $regex: search, $options: 'i' }
            }
        }
        const space = await spaceModel.find(query).populate("userID");
         const response = {
            status : "success",
            data : {
                space
            }
         }
         return res.status(200).json(response);
    } catch (error) {
        return res.status(500).send({error : "Internal error!"})
    }
});

module.exports = {
    Get_All_Space_name
}