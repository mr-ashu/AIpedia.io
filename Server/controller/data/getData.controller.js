const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");
const { query } = require("express");

//route /data/get/?search='text'&page=1& Pricing=Freemium
const getDataController = asyncHandler(async (req, res) => {
  const { search, page = 1, sort } = req.query;
  const { Pricing, others_features,  works_with,  Category } = req.body;//arrey form through body
 // const subcatQuery = subcategory.split(",");

  
  let limit = 9;

  try {
    // let data;
    let query = {};

    if (search) {
      query = {
        ...query,
        ...{
          $or: [
            { Title: { $regex: search, $options: 'i' } },
            { Category: { $regex: search, $options: 'i' }  },
            { Tagline: { $regex: search, $options: 'i' }  },
          ],
        },
      };
    }

    if (Pricing) {
      query = { ...query, ...{  Pricing: { $in:  Pricing } } };
    }

    if(Category){
      
      query = {
        ...query,
        Category : {$in : Category}
      }

    }



    if (  works_with) {
      query = { ...query, ...{   works_with: { $in:   works_with } } };
    }

    if ( others_features) {
      query = { ...query, ...{   others_features: { $in:   others_features } } };
    }

    let data = dataModel.find(query);
    let t=await dataModel.find(query).count()

 

 
    

    let sortQuery = {};
    if (sort == "a-z") {
      sortQuery = { title: "asc" };
    } else if (sort == "mostlike") {
      sortQuery = { likes: "desc" };
    } else if (sort == "newdataadd") {
      sortQuery = { createdAt: "desc" };
    }

    if(sort){
      data = data.sort(sortQuery);
    }

   
    data = data.limit(limit).skip((page - 1) * limit);
    data = await data;
    const response = {
      status: "sucess",
      result: t,
      page: Math.ceil(t/limit),
      data: data,
       
    };

      return res.send(response);

  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = {
  getDataController,
};