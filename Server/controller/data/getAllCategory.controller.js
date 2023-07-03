const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

const getAllCategoryController = asyncHandler(async (req, res) =>{
    let {category, page = 1} = req.query;
    let limit = 9;
    try {
      let categoryData = await dataModel
        .find({ category: { $elemMatch: { $regex: category, $options: "i" } } });
      return res.send({ data: categoryData });
    } catch (error) {
      return res.status(500).send({ error: "Server time out", msg: error });
    }
});

module.exports = {
    getAllCategoryController
}