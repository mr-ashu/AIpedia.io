const { Router } = require("express");
const dataRouter = Router();
const dataContainer = require("../model/data");


const { addDataController } = require("../controller/data/addData.controller");
const upload = require("../middleware/multipartFormData");
 
const {
  updateDataController,
} = require("../controller/data/updateData.controller");
const {
  likeDataController,
} = require("../controller/data/likeData.controller");
const {
  deleteDataController,
} = require("../controller/data/deleteData.controller");
const { getDataController } = require("../controller/data/getData.controller");
const {
  getSingleDataController,
} = require("../controller/data/getSingleData.controller");
const {
  addCommentController,
} = require("../controller/data/addComment.controller");
const { verifyAdmin } = require("../middleware/VerifyAdmin");
const { verifyToken } = require("../middleware/VerifyToken");
const {
  getCommentController,
} = require("../controller/data/getComment.controller");
const {
  topTenCategoryController,
} = require("../controller/data/TopTenCategory.controller");
const {
  getUserLikesDataController,
} = require("../controller/data/getUserLikesData.controller");
const {
  getAllSubCategoryController,
} = require("../controller/data/getAllSubCategory.controller");
const {
  getAllCategoryController,
} = require("../controller/data/getAllCategory.controller");
const {
  updateAdminDataController,
} = require("../controller/data/updateAdminData.controller");
const {
  likeCommentDataController,
} = require("../controller/data/likeComment.controller");
const {
  ratingDataController
} = require("../controller/rating-data/AddRating.controller");

dataRouter.route("/get/subcategory/all").get(getAllSubCategoryController);
dataRouter.route("/add").post(upload.single("csvFile"), addDataController);
dataRouter.route("/update/:id").patch(verifyAdmin, updateDataController);
dataRouter.route("/update/:id/add-like").patch(verifyToken, likeDataController);
dataRouter.route("/delete/:id").delete(deleteDataController);
dataRouter.route("/get").post(getDataController);
 
dataRouter.route("/single/get/:id").get(getSingleDataController);
dataRouter
  .route("/update/:id/add-comment")
  .post(verifyToken, addCommentController);
dataRouter.route("/get/comment/:id").get(getCommentController);
////////////////
dataRouter
  .route("/update/:id/add-like/comment")
  .patch(verifyToken, likeCommentDataController);
///////////////
dataRouter.route("/top-ten/category").get(topTenCategoryController);
dataRouter
  .route("/get/userlikes/data")
  .get(verifyToken, getUserLikesDataController);
dataRouter.route("/get/all/category").get(getAllCategoryController);
dataRouter.route("/update/admin/data/:id").patch(updateAdminDataController);

//// Rating

dataRouter.route("/rating").post(verifyToken, ratingDataController);

//// Rating
module.exports = { dataRouter };
