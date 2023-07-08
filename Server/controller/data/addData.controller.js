const asyncHandler = require("express-async-handler");
const convertCSVtoJSON = require("../../functions/convertCSVtoJSON");
const { dataModel } = require("../../model/data");
const modifyJsonData = require("../../functions/modifyJsonData");
const validateObjectKeys = require("../../functions/validateObjectkeys");
const deleteCSVfile = require("../../functions/deleteCSVfile");
const getScreenshot = require("../../functions/getScreenshot");

//@route -> /data/add
const addDataController = asyncHandler(async (req, res) => {
  try {
    
    const jsonData = await convertCSVtoJSON(req.file.path);
   

    if (!jsonData) {
      return res
        .status(500)
        .send({ error: "something went wrong with parsing csv" });
    }

    // console.log(jsonData);
    // return res.end()

    const modifiedJsonData = modifyJsonData(jsonData);

   

    // const { status, message } = validateObjectKeys(modifiedJsonData[0]);

    // if (!status) {
    //   deleteCSVfile(req.file.path);
    //   return res.status(400).send({ error: message });
    // }

    // const dataWithImage = await getScreenshot(modifiedJsonData);
  //  p
  // return res.send({modifiedJsonData, av : modifiedJsonData.length});
  // return res.send(modifiedJsonData)

    const uploadCSV = await dataModel.insertMany(modifiedJsonData);

    if (!uploadCSV) {
      deleteCSVfile(req.file.path);
      return res
        .status(500)
        .send({ error: "something went wrong in adding data" });
    }

    deleteCSVfile(req.file.path);
    return res.status(201).send({ msg: "Successfully Added" });
  } catch (error) {
    console.log(error.stack);
    return res
      .status(500)
      .send({ error, stack : error.stack });
  }
});

module.exports = {
  addDataController,
};
