const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
   
    URL: { type: String},
    Title: { type: String},
    Tagline: { type: String},
    Description: { type: String},
    Tags: [{ type: String}],
    Pricing: { type: String},
    Category: [{ type: String}],
    Support: { type: String},
    Logo: { type: String},
    Cover_image: { type: String},
    Galary_image: [{ type: String}],
    Youtube_embed: { type: String},
    Note: [{ type: String}],
    Dashboard: [{ type: String}],
    isActive: Boolean,
    key_features: [{ type: String}],
    price_amount: { type: String},
    works_with: [{ type: String}],
    others_features: [{ type: String}],
    social_media: [{ type: String}],
    paid: Boolean,
    likes: Number,
   
    comment: {
      type: Number,
      default: 0,
    },
    rating:{
      type: Number,
      default: Math.floor(Math.random() * 5)
  },
    featured:{
      type: Boolean,
      default:false
    },
    highlighted:{
      type: Boolean,
      default:false
    },
    verify:{
      type: Boolean,
      default:false
    },
    tool_own:{
      type: Boolean,
      default:false
    }


  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const dataModel = mongoose.model("data", dataSchema);

module.exports = { dataModel };
