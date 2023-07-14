const express = require("express");
const cors = require("cors");
const { dataRouter } = require("./routes/dataRoute");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { otpRouter } = require("./routes/otp.routes");
const { mySpaceRouter } = require("./routes/mySpace.Route");
const { spaceRouter } = require("./routes/space.route");
const { carouselRouter } = require("./routes/carousel.route");
const { socialRouter } = require("./routes/socialMedia.route");
const { submitRouter } = require("./routes/submit.route");
const path = require('path');
const viewRouter =require("./routes/view.routes")
require("dotenv").config();
require("./db");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",viewRouter)
app.use("/data", dataRouter);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/auth", otpRouter);
app.use("/myspace", mySpaceRouter);
app.use("/space", spaceRouter);
app.use("/carousel", carouselRouter);
app.use("/social", socialRouter);
app.use("/submit", submitRouter);
 

app.listen(port, () => console.log(`Listen to the http://localhost:${port}`));

 