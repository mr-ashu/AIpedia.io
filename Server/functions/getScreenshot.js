const request = require("request");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const deleteImages = require("./deleteImages");
const path = require("path");
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const getImage = (links) => {
  const token = process.env.CLOUD_TOKEN;
  const url = encodeURIComponent(links);
  const width = 1280;
  const height = 1024;
  const response_type = "image";

  // Create the query URL.
  let query = "https://api.pikwy.com";

  let promise = new Promise((resolve, reject) => {
    query += `?token=${token}&url=${url}&width=${width}&height=${height}&response_type=${response_type}&format=png`;

    request.get({ url: query, encoding: "binary" }, (err, response, body) => {
    
        if(body?.mesg === 'limit exceeded') {
            reject("limit exceeded")
        }

      if (!err) {
    
        resolve(body);
      } else {
        reject(err);
      }
    });
  });

  return promise;
};

const saveImage = (body, name) => {
  let promise = new Promise((resolve, reject) => {
    fs.writeFile(
        __dirname + "/../images/" + `${name}.png`,
        body,
        "binary",
       async (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("The file was saved!");
            try {
                let image = await cloudinary.uploader.upload(__dirname + "/../images/" + `${name}.png`);
                resolve(image.secure_url);
                deleteImages(`${name}.png`)
            } catch (error) {
                reject(error)
                deleteImages(`${name}.png`)
            }
            
          }
        }
      );
  });
  return promise;
};

const getScreenshot = async (data) => {
  for (let item of data) {
    try {
      let imageData = await getImage(item.links);

      let imageLink = await saveImage(imageData, encodeURIComponent(item.links));

      item.image = imageLink
    } catch (error) {
      console.log(error);
    }
  }

  return data;
};

module.exports = getScreenshot;