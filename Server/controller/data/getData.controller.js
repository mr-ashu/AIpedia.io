const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

//route /data/get/?search='text'&page=1&price=Freemium
const getDataController = asyncHandler(async (req, res) => {
  const { search, page = 1, sort } = req.query;
  const { price, integration, subcategory } = req.body;//arrey form through body
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
            { title: { $regex: search, $options: 'i' } },
            { category: { $regex: search, $options: 'i' }  },
            { subcategory: { $regex: search, $options: 'i' }  },
          ],
        },
      };
    }

    if (price) {
      query = { ...query, ...{ price: { $in: price } } };
    }

    if(subcategory){
      
      query = {
        ...query,
        subcategory : {$in : subcategory}
      }

    }



    if (integration) {
      query = { ...query, ...{ integration: { $in: integration } } };
    }

    let data = dataModel.find(query);

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

    // if (sort) {
    //   console.log(sort, "empty");
    //   let data = await dataModel
    //     .find(query)
    //     .sort(sortQuery)
    //     .limit(limit)
    //     .skip((page - 1) * limit);
    //   return res.send(data);
    // } else {
    //   let data = await dataModel
    //     .find(query)
    //     .limit(limit)
    //     .skip((page - 1) * limit);
    data = data.limit(limit).skip((page - 1) * limit);
    data = await data;

      return res.send(data);

  } catch (error) {
    return res.status(500).send({ error });
  }
});

module.exports = {
  getDataController,
};