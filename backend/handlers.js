"use strict";

const { connectToDB } = require("./dbConnector");

const getAllCategories = async (req, res) => {
  findInDBAndSend({ collectionName: "categories", mongoQuery: null, res });
};
const getAllTutors = async (req, res) => {
  findInDBAndSend({ collectionName: "users", mongoQuery: null, res });
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

const findInDBAndSend = async ({ collectionName, mongoQuery, res }) => {
  try {
    const { db, client } = await connectToDB();
    const data = await db.collection(collectionName).find(mongoQuery).toArray();
    console.log("data", data);
    client.close();
    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (err) {
    client.close();
    res.status(500).json({
      status: 500,
      message: `An error happend.`,
      data: err.message,
    });
  }
};

module.exports = {
  getAllCategories,
  getAllTutors,
  getProfileByUsername,
  getAllOrders,
  getOrdersByTutorUsername,
  getUserByUsername,
};
