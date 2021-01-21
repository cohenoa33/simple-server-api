const express = require("express"); // import express
const app = express(); // get us the ability to create routes
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");
// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
//IMPORT ROUTES
const postRoutes = require("./routes/posts");
// USE MIDDLEWARE TO GET MULTYPLE POSTS
app.use("/posts", postRoutes);
// ROUTES
app.get("/", (req, res) => {
  res.send("We are on Home page");
});

// How do we start listening to the server
app.listen(8000);

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);
