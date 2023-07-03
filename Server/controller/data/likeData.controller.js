const asyncHandler = require("express-async-handler");
const { likeModel } = require("../../model/like.model");
const {dataModel} = require("../../model/data");
const {userLikesModel} = require("../../model/userLikes.model");

//@route -> /update/:id/add-like
///method patch
const likeDataController = asyncHandler(async (req, res) => {
  let videoID = req.params.id
  let userID = req._id;
  try {
    let isExists = await likeModel.findOne({videoID, userID});
    if(isExists){
      await likeModel.findByIdAndDelete({_id : isExists._id});
      let isVideoExists = await userLikesModel.findOne({videoID, userID});
      if(isVideoExists){
        await userLikesModel.findByIdAndDelete({_id : isVideoExists._id})
      }
    }else{
      await likeModel.create({videoID, userID});
      await userLikesModel.create({videoID, userID});
    }
    let data = await likeModel.find({videoID});
    let length = data.length;
    await dataModel.findByIdAndUpdate({_id : videoID}, {$set : {likes : length}});
    return res.send({msg : "Successfullly Like"})
  } catch (error) {
    console.log(error.stack);
    console.log(error);
  }
});

module.exports = {
  likeDataController,
};

// const { id } = req.params;
// let userId = req._id;

// const data = await dataModel.findById(id);

// if (!data) {
//   return res.status(404).send({ error: "data not found" });
// }

// //include users mongodb id in place of user._id
// const addLike = await dataModel.findByIdAndUpdate(id, {
//   $push: { likes: { user: userId } },
// });

// if (!addLike) {
//   return res
//     .status(500)
//     .send({ error: "something went wrong in adding like" });
// }

// const updatedData = await dataModel
//   .findById(addLike._id)
//   .populate({ path: "likes", populate: "user" });

// return res.status(202).send(updatedData);