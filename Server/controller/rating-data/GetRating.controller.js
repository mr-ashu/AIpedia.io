const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");
const { ratingModel } = require("../../model/RatingData.model");

//route /data/get/?search='text'&page=1&price=Freemium
const getRatingController = asyncHandler(async (req, res) => {
 

  try {
   

 
      let rating = await ratingModel.find()
         

      return res.send(rating);
    
  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = {
  getRatingController,
};