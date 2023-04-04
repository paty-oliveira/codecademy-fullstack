const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes");

const restaurantsModule = require("./routes/restaurants");
const restaurantsRouter = restaurantsModule.router;

const starredRestaurantsRouter = require("./routes/starredRestaurants")

const cors = require("cors");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/restaurants/starred", starredRestaurantsRouter);
app.use("/restaurants", restaurantsRouter);

module.exports = app;
