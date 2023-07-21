const  app = require('express').Router();
const  getCat = require("../controller/Category/getCat");
const addCat  = require("../controller/Category/addCat");
const  deleteCat = require("../controller/Category/deleteCat")

 app.route("/add").post(addCat);
 app.route("/get").get(getCat);
 app.route("/delete/:id").delete(deleteCat);

module.exports = app 