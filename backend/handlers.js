"use strict";

const tutorImgs = require("./data/tutorImgs");

const { connectToDB } = require("./dbConnector");

const getAllCategories = async (req, res) => {
  findInDB({ collectionName: "categories", mongoQuery: null, res });
};
const getAllTutors = async (req, res) => {
  let result = await findInDB({
    collectionName: "tutors",
    mongoQuery: null,
  });

  console.log(result.data[0]);

  if (result.status === 200) {
    const newData = result.data.map((tutor) => {
      tutor.avatarImg = tutorImgs[tutor.username].avatarImg;
      return tutor;
    });
  }

  res.status(result.status).json(result);
};

const getTutorProfileByUsername = async (req, res) => {
  const result = findOneInDB({
    collectionName: "tutors",
    mongoQuery: { username: req.params.username.toLowerCase() },
  });
  if (result.status === 200) {
    result.data.avatarImg = tutorImgs[result.data.username].avatarImg;
  }

  res.status((await result).status).json(result);
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

const findInDB = async ({ collectionName, mongoQuery, res }) => {
  try {
    const { db, client } = await connectToDB();

    const data = await db.collection(collectionName).find(mongoQuery).toArray();

    client.close();
    return { status: 200, messge: "success", data };
  } catch (err) {
    if (client) {
      client.close();
    }
    return { status: 500, messge: "error" };
  }
};

const findOneInDB = async ({ collectionName, mongoQuery, res }) => {
  try {
    const { db, client } = await connectToDB();
    const data = await db.collection(collectionName).findOne(mongoQuery);

    client.close();

    if (data) {
      return { status: 200, messge: "success", data };
    } else {
      return { status: 400, messge: "bad request" };
    }
  } catch (err) {
    if (client) {
      client.close();
    }
    return { status: 500, messge: "error" };
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
