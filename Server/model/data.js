const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    category: [{ type: String, trim : true}],
    subcategory: [{ type: String, trim : true }],
    title: { type: String, require: true },
    links: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: String, require: true },
    discountCode: { type: String },
    features: [{ type: String, require: true, trim : true }],
    integration:[{type:String, trim : true}],
    image: {
      type: String,
      // require: true,
      default:
        "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1380&t=st=1680767718~exp=1680768318~hmac=abc7757996226010b45ed348fa61117972bef23f3a01f3b660f7936766135b5c",
    },
    likes: {
      type: Number,
      default: 0,
    },
    comment: {
      type: Number,
      default: 0,
    },
    rating:{
      type:Number,
      default:0
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const dataModel = mongoose.model("data", dataSchema);

module.exports = { dataModel };