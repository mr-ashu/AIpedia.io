const csvToJson = require("csvtojson");

const convertCSVtoJSON = async (csvFile) => {
  const json = await csvToJson().fromFile(csvFile);

  const jsonString = JSON.stringify(json, null, 2);

  return json;
};

module.exports = convertCSVtoJSON;
