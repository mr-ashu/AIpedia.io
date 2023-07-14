const asyncHandler = require("express-async-handler");
const { dataModel } = require("../../model/data");

//route -> /data/update
const updateDataController = asyncHandler(async (req, res) => {

  console.log(req.body);
  try {
    const dataToUpdate = req.body;
 
    const sortingParameter = req.body.sortBy;
 
    dataToUpdate.sort((a, b) => {
      if (a[sortingParameter] < b[sortingParameter]) return -1;
      if (a[sortingParameter] > b[sortingParameter]) return 1;
      return 0;
    });
 
    const updatePromises = dataToUpdate.map(async (data, index) => {
      const { _id, ...updatedData } = data;
 
      const result = await dataModel.updateOne({ _id }, { $set: { ...updatedData, position: index } });

      return result.nModified;
    });
 
    const updateResults = await Promise.all(updatePromises);
 
    const updatedCount = updateResults.reduce((total, nModified) => total + nModified, 0);

    
    const updatedData = await dataModel.find();

    res.json({msg:"Sucessfully update", updatedCount, updatedData });
  } catch (error) {
    console.error('Error updating documents:', error);
    res.status(500).json({ error: 'Failed to update documents' });
  }
 
});




module.exports = {
  updateDataController,
};
