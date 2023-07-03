const fs = require("fs");

const deleteCSVfile = (path) => {
  fs.unlink(path, function (err) {
    if (err) {
      throw new Error(err);
    } else {
      console.log("Successfully deleted the csv file.");
    }
  });
};

module.exports = deleteCSVfile;
