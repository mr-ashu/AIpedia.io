
const asyncHandler = require("express-async-handler");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const convertCSVtoJSON = require("../../functions/convertCSVtoJSON");
const { dataModel } = require("../../model/data");
const modifyJsonData = require("../../functions/modifyJsonData");
const deleteFile = require("../../functions/deleteCSVfile");

 
const addDataController = asyncHandler(async (req, res) => {
  let {isCSVFile = true} = req.body;
  try {
    let jsonData;
  if(isCSVFile){
    
    if (req.file && req.file.mimetype === "text/csv") {

      jsonData = await convertCSVtoJSON(req.file.path);
      if (!jsonData) {
        deleteFile(req.file.path);
        return res.status(500).send({ error: "Something went wrong with parsing CSV" });
      }


      isCSVFile = true;


      deleteFile(req.file.path);
    } else if (req.body && Object.keys(req.body).length !== 0) {

      jsonData = req.body;
    } else {
      return res.status(400).send({ error: "No data provided" });
    }

    if (!Array.isArray(jsonData)) {
      jsonData = [jsonData];
    }

    jsonData = modifyJsonData(jsonData);


    if (Array.isArray(jsonData) && isCSVFile) {
      jsonData = jsonData.map((item) => ({
        ...item,
        verify: true,
      }));
    }
  }

  if(isCSVFile){
    const uploadData = await dataModel.insertMany(jsonData);
    if (!uploadData || uploadData.length === 0) {
      return res.status(500).send({ error: "Failed to add data to the database" });
    }

    return res.status(201).send({ msg: "Successfully Added" });
  }else{
    let normalData = req.body;
    delete normalData.isCSVFile;
    const uploadData = await dataModel.create(normalData);
    if (!uploadData || uploadData.length === 0) {
      return res.status(500).send({ error: "Failed to add data to the database" });
    }

    return res.status(201).send({ msg: "Successfully Added" });
  }
    

 
  } catch (error) {
    console.error(error.stack);
    return res.status(500).send({ error: error.message, stack: error.stack });
  }
});


module.exports = {
  addDataController,
};
