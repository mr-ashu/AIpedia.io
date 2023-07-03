const asyncHandler = require("express-async-handler");
const { ratingModel } = require("../../model/RatingData.model");
const { dataModel } = require("../../model/data");

const ratingDataController = asyncHandler(async (req, res) => {
  let videoID = req.params.id;
  let userID = req._id;
  const { rating } = req.body;
  try {
    let isExists = await ratingModel.findOne({ videoID, userID });
    if (isExists) {
      await ratingModel.findByIdAndUpdate(
        { _id: isExists._id },
        { $set: { rating } }
      );
    } else {
      await ratingModel.create({ videoID, userID, rating });
    }

    let result = await ratingModel.aggregate([
      {
        $group: {
          videoID,
          rating: { $avg: "$rating" },
        },
      },
    ]);

    const avgRating = result[0].rating;

    await dataModel.findByIdAndUpdate(
      { _id: videoID },
      { $set: { rating: avgRating } }
    );
    return res.send({ msg: "Successful" });
  } catch (error) {
    console.log(error.stack);
    console.log(error);
  }
});

module.exports = {
  ratingDataController,
};