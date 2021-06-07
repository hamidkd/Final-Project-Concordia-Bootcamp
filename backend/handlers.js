"use strict";

const { connectToDB, findInDBAndSend } = require("./dbConnector");

const getAllCategories = async (req, res) => {
  console.log("Fake Get all categories");
};
const getAllTutors = async (req, res) => {
  findInDBAndSend({ collectionName: "users", mongoQuery: null, res: res });
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
