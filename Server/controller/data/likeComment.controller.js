const asyncHandler = require("express-async-handler");
const { likeCommentModel } = require("../../model/likeComment.model");
const { commentModel } = require("../../model/comment.model");

const likeCommentDataController = asyncHandler(async (req, res) => {
  let commentID = req.params.id;
  let userID = req._id;
  try {
    let isExists = await likeCommentModel.findOne({ commentID, userID });
    if (isExists) {
      await likeCommentModel.findByIdAndDelete({ _id: isExists._id });
    } else {
      await likeCommentModel.create({ commentID, userID });
    }
    let data = await likeCommentModel.find({ commentID });
    let length = data.length;
    await commentModel.findByIdAndUpdate(
      { _id: commentID },
      { $set: { likes: length } }
    );
    return res.send({ msg: "Successfullly Like" });
  } catch (error) {
    console.log(error.stack);
    console.log(error);
  }
});

module.exports = {
  likeCommentDataController,
};
