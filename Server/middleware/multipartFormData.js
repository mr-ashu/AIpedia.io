const multer = require("multer");
const path = require("path");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({
  storage: Storage,
  fileFilter: (req, file, cb) => {
    const fileType = file.mimetype;
    if (fileType === "text/csv") {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error("Only CSV format supported"));
    }
  },
  limits: { fileSize: 1024 * 1024 * 2 }, // 2MB size limit
});

module.exports = upload;
