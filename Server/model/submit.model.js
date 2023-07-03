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


const validate = (data) => {
    const schema = Joi.object({
        tool_url: Joi.string(),
        dashboard_link: Joi.string(),
        tool_name: Joi.string(),
        tagline: Joi.string(),
        description: Joi.string(),
        key_feature: Joi.string() ,
        social_media: Joi.string() ,
        categories: Joi.array() ,
        integration: Joi.array() ,
        other: Joi.array(),
        
        prices: Joi.string(),
        price_amount: Joi.number(),
        promo_code:Joi.string(),
        offer:Joi.string() ,
        expire_date:Joi.string(),
        thumbnail: Joi.string(),
        cover_image: Joi.string(),
        gallery: Joi.array(),
        youtube_url: Joi.string(),

        tool_own: Joi.boolean(),
    });
    return schema.validate(data);
};
const submitModel = mongoose.model("submit", submitSchema);
module.exports = {submitModel,validate}
    
 