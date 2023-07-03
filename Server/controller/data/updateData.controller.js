const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

//route -> /data/update/:id
const updateDataController = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const {
    category,
    subcategory,
    title,
    links,
    description,
    price,
    discounCode,
    features,
    image,
  } = req.body;

  if (!title || !links || !description || !price || !features || !image) {
    return res.status(404).send({ error: "Please include all fields" });
  }

  //send array of string in stringify format for all arrays from frontend
  const parsedCategory = JSON.parse(category);
  const parsedSubcategory = JSON.parse(subcategory);
  const parsedFeatures = JSON.parse(features);

  try {
    const data = await dataModel.findById(id);

    if (!data) {
      return res.status(404).send({ error: "data not found" });
    }

    const updateRes = await dataModel.findByIdAndUpdate(id, {
      category: parsedCategory,
      subcategory: parsedSubcategory,
      title,
      links,
      description,
      price,
      discounCode,
      features: parsedFeatures,
      image,
    });

    if (!updateRes) {
      return res.status(500).send({ error: "Somthing went wrong in updating" });
    }

    const newData = await dataModel.findOne(updateRes._id);

    return res.status(202).send(newData);
  } catch (error) {
    console.log(error.stack);
    console.log(error);
  }
});

module.exports = {
  updateDataController,
};
