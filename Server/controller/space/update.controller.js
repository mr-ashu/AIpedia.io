const asyncHandler = require("express-async-handler");
const {spaceModel} = require("../../model/space.model");

const updateController = asyncHandler(async (req, res) => {
    let _id = req.params.id;
    try {
        let isExists = await spaceModel.findOne({ _id });
        if (!isExists) {
            return res.status(400).send({ error: "This Space not exists anymore!" });
        }

 
        let updatedTool = [...new Set([...isExists.tool, ...req.body.tool])];

        
        let updateSpace = await spaceModel.findByIdAndUpdate(
            _id,
            { ...req.body, tool: updatedTool },
            { new: true }  
        );
        return res.send({ msg: "Successfully Updated!", space: updateSpace });
    } catch (error) {
        return res.status(500).send({ error: "Internal error!" });
    }
});

module.exports = {
    updateController,
};
