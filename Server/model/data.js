const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    URL: { type: String, trim: true },
    Title: { type: String, trim: true },
    Tagline: { type: String, trim: true },
    Description: { type: String, trim: true },
    Tags: [{ type: String, trim: true }],
    Pricing: { type: String, trim: true },
    Category: [{ type: String, trim: true }],
    Support: { type: String, trim: true },
    Logo: { type: String, trim: true },
    Cover_image: { type: String, trim: true },
    Galary_image: [{ type: String, trim: true }],
    Youtube_embed: { type: String, trim: true },
    Note: [{ type: String, trim: true }],
    Dashboard: [{ type: String, trim: true }],
    isActive: Boolean,
    key_features: [{ type: String, trim: true }],
    price_amount: { type: String, trim: true },
    works_with: [{ type: String, trim: true }],
    others_features: [{ type: String, trim: true }],
    social_media: [{ type: String, trim: true }],
    paid: Boolean,
    likes: {
      type: Number,
      default: Math.floor(Math.random() * 500),
    },
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
    }

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const dataModel = mongoose.model("data", dataSchema);

module.exports = { dataModel };
