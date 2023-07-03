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

require("dotenv").config();
require("./db");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/data", dataRouter);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/auth", otpRouter);
app.use("/myspace", mySpaceRouter);
app.use("/space", spaceRouter);
app.use("/carousel", carouselRouter);
app.use("/social", socialRouter);
app.use("/submit", submitRouter);

app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Listen to the localhost:http://localhost:${port}`));
