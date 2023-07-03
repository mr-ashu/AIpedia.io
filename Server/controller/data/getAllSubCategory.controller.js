const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

const getAllSubCategoryController = asyncHandler(async (req, res) => {
  let {subcategory, page = 1} = req.query;
  let limit = 9;
  try {
    let subcategoryData = await dataModel
      .find({ subcategory: { $elemMatch: { $regex: subcategory, $options: "i" } } });
    return res.send({ data: subcategoryData });
  } catch (error) {
    return res.status(500).send({ error: "Server time out", msg: error });
  }
});

module.exports = {
  getAllSubCategoryController,
};