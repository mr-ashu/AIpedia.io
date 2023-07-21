const mongoose = require("mongoose");
const Joi = require("joi");


const submitSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "signup"
    },
   
    // basic..............
   
    tool_url: {
        type: String,
       
    },
    dashboard_link: {
        type: String
    },

    tool_name: {
        type: String,
        
    },
    tagline: {
        type: String,

    },

    description: {
        type: String,

    },
    key_feature: {
        type: String,
    },
    social_media: [{ type: String }],
    categories: [{ type: String }],
    integration: [{ type: String }],
    other: [{ type: String }],

//    price..............
   
    prices: {
        type: String,
       
    },
    price_amount: {
        type: Number,
     
    },

    promo_code: {
        type: String,

    },
    offer: {
        type: String,
    },
    expire_date: {
        type: String,
    },


// media.................
    thumbnail: {
        type: String,
    },
    cover_image: {
        type: String,
    },
    gallery: [{ type: String }],
    youtube_url: {
        type: String,
    },

    // verify.......................
  
    tool_own: {
        type: Boolean,
        required: true
    },
    verify: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});


 ;
const submitModel = mongoose.model("submit", submitSchema);
module.exports = {submitModel}
    
 