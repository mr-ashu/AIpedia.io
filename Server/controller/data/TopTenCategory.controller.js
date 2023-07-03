const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

const topTenCategoryController = asyncHandler(async (req, res) => {
  let category = req.query.category;
  try {
    let categoryData = await dataModel
      .find({ category: { $elemMatch: { $regex: category, $options: "i" } } })
      .sort({ likes: -1 })
      .limit(10);
    return res.send({ data: categoryData });
  } catch (error) {
    return res.status(500).send({ error: "Server time out", msg: error });
  }
});

module.exports = {
  topTenCategoryController,
};