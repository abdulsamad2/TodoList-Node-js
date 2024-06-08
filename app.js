const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const viewRoutes = require("./routes/viewRoutes");

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(morgan("dev"));

app.use("/", viewRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", viewRoutes);

module.exports = app;
