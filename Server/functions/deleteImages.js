const fs = require("fs");

const deleteImages = (path) => {
  console.log(__dirname + "/../images");
  fs.unlink(__dirname + "/../images/" + path, function (err) {
    if (err) {
      throw new Error(err);
    } else {
      console.log("Successfully deleted the images");
    }
  });
};

module.exports=deleteImages;