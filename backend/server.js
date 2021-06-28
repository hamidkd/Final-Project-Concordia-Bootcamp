"use strict";

const {
  handleGoogleLogin,
  getAllCategories,
  getAllTutors,
  getTutorProfileByUsername,
  updateTutorProfileByUsername,
  getAllOrders,
  deleteOrderById,
  getOrdersByTutorUsername,
  createOrder,
  getUserByUsername,
  getOrdersByByEmail,
  addReviewBytutorUsername,
} = require("./handlers");

const port_number = process.env.PORT || 8000;

const express = require("express");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
//this will give you HTTP requests log in console
app.use(cors());
app.use(morgan("tiny"));

app.use(bodyParser());

//requests for statics files will go to into the public folder.
// app.use(express.static("public"));

app
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(express.static("./server/assets"))
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"));

// root endpoint -------------------------------------------------

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "KidCademy Backend v0.2 - for more informations and documentations please visit: https://github.com/hamidkd/kidcademy-backend/"
    );
});

//endpoints ------------------------------------------------------
app.post("/api/googlelogin", handleGoogleLogin);
app.get("/api/categories", getAllCategories);
app.get("/api/tutors", getAllTutors);
app.get("/api/tutors/:username", getTutorProfileByUsername);
app.patch("/api/tutors/:tutorUsername/update", updateTutorProfileByUsername);
app.patch("/api/tutors/:tutorUsername/add-review", addReviewBytutorUsername);
app.get("/api/orders", getAllOrders);
app.delete("/api/orders/:orderId/delete", deleteOrderById);
app.get("/api/orders/:tutorUsername", getOrdersByTutorUsername);
app.get("/api/orders/email/:email", getOrdersByByEmail);
app.post("/api/orders/:tutorUsername", createOrder);
// app.get("/api/users/:username", getUserByUsername);

// this is the catch all endpoint ---------------------------------

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Page Not Found",
  });
});

//listen on port 8000

app.listen(port_number, () => {
  console.log("listening on port 8000 ");
});
