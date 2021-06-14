"use strict";

const {
  handleGoogleLogin,
  getAllCategories,
  getAllTutors,
  getTutorProfileByUsername,
  updateTutorProfileByUsername,
  getAllOrders,
  getOrdersByTutorUsername,
  createOrder,
  getUserByUsername,
  } = require("./handlers");

const express = require("express");
var bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
//this will give you HTTP requests log in console
app.use(morgan("tiny"));

app.use(bodyParser());

//requests for statics files will go to into the public folder.
app.use(express.static("public"));

//endpoints ------------------------------------------------------
app.post("/api/googlelogin", handleGoogleLogin);
app.get("/api/categories", getAllCategories);
app.get("/api/tutors", getAllTutors);
app.get("/api/tutors/:username", getTutorProfileByUsername);
app.patch("/api/tutors/:tutorUsername/update", updateTutorProfileByUsername);
app.get("/api/orders", getAllOrders);
app.get("/api/orders/:tutorUsername", getOrdersByTutorUsername);
app.post("/api/orders/:tutorUsername", createOrder);
app.get("/api/users/:username", getUserByUsername);

// this is the catch all endpoint ---------------------------------

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page Not Found",
  });
});

//listen on port 8000

app.listen(8000, () => {
  console.log("listening on port 8000");
});
