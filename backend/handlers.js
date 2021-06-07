"use strict";

const avatarImgs = require("./data/tutorImgs.json");

const { connectToDB } = require("./dbConnector");

const getAllCategories = async (req, res) => {
  findInDBAndSend({ collectionName: "categories", mongoQuery: null, res });
};
const getAllTutors = async (req, res) => {
  findInDBAndSend({ collectionName: "tutors", mongoQuery: null, res });
};

const getTutorProfileByUsername = async (req, res) => {
  findOneInDBAndSend({
    collectionName: "tutors",
    mongoQuery: { username: req.params.username.toLowerCase() },
    res,
  });
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

    client.close();
    res.status(200).json({
      status: 200,
      message: "success",
      data: data,
    });
  } catch (err) {
    if (client) {
      client.close();
    }
    res.status(500).json({
      status: 500,
      message: `An error happend.`,
      data: err.message,
    });
  }
};

const findOneInDBAndSend = async ({ collectionName, mongoQuery, res }) => {
  try {
    const { db, client } = await connectToDB();
    const data = await db.collection(collectionName).findOne(mongoQuery);

    if (collectionName === "users" && mongoQuery) {
      data.avatarImg = avatarImgs[data.username].avatarImg;
    }
    client.close();

    if (data) {
      res.status(200).json({
        status: 200,
        message: "success",
        data: data,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "bad request",
      });
    }
  } catch (err) {
    if (client) {
      client.close();
    }
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
  getTutorProfileByUsername,
  getAllOrders,
  getOrdersByTutorUsername,
  getUserByUsername,
};
