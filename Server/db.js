const mongoose = require("mongoose");

mongoose.connect(process.env.DB);
console.log(process.env.DB);
