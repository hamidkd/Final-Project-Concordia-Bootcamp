"use strict";

const { connectToDB } = require("./dbConnector");

const getAllCategories = async (req, res) => {
  console.log("Fake Get all categories");
};
const getAllTutors = async (req, res) => {
  try {
    const { db, client } = await connectToDB();
    console.log("Fake Get all users");
    const users = await db.collection("users").find().toArray();
    client.close();
    res.status(200).json({
      status: 200,
      message: "Here are the flight numbers.",
      data: users,
    });
  } catch (error) {}
};
const getProfileByUsername = async (req, res) => {
  console.log("Fake Get Tutor Profile by username");
};
const getAllOrders = async (req, res) => {
  console.log("Fake Get All Orders");
};
const getOrdersByTutorUsername = async (req, res) => {
  console.log("Fake Get orders by tutor username");
};
const getUserByUsername = async (req, res) => {
  console.log("Fake Get user by username");
};

module.exports = {
  getAllCategories,
  getAllTutors,
  getProfileByUsername,
  getAllOrders,
  getOrdersByTutorUsername,
  getUserByUsername,
};
