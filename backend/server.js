"use strict";

const express = require("express");
const morgan = require("morgan");

const app = erxpress();
//this will give you HTTP requests log in console
app.use(morgan("tiny"));

app.use(express.bodyParser());

//requests for statics files will go to into the public folder.
app.use(express.static("public"));

//endpoints ------------------------------------------------------
app.get("/api/");

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
