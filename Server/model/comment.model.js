const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "signup",
    },
    videoID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "data",
    },
    message: {
      type: String,
      required: true,
    },
    likes : {
      type : Number,
      default : 0
    },
    rating:{
      type : Number,
      default : 0
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const commentModel = mongoose.model("comment", commentSchema);
module.exports = {
    commentModel,
};