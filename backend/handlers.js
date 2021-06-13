"use strict";

const tutorImgs = require("./data/tutorImgs");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");

const GOOGLE_OAUTH2_CLIENT_ID = process.env.GOOGLE_OAUTH2_CLIENT_ID;
console.log("OOOOOO", GOOGLE_OAUTH2_CLIENT_ID);

const oAuth2Client = new OAuth2Client(GOOGLE_OAUTH2_CLIENT_ID);

const { connectToDB } = require("./dbConnector");

const handleGoogleLogin = async (req, res) => {
  const { tokenId } = req.body;
  console.log("inside google login handler");
  console.log("tokenId", req.body);

  oAuth2Client
    .verifyIdToken({ idToken: tokenId, audience: GOOGLE_OAUTH2_CLIENT_ID })
    .then(async (response) => {
      console.log("response payloOOOOOOOOOOOd", response.payload);
      const { email, email_verified, name } = response.payload;

      if (email_verified) {
        const result = await findOneInDB({
          collectionName: "tutors",
          mongoQuery: { email },
        });
        if (result.data) {
          res.status(200).json(result);
        } else {
          //create a user with that name
          res.status(400).json({ status: 400, message: "no such a user" });
        }
      }
    });
};

const getAllCategories = async (req, res) => {
  const result = await findInDB({
    collectionName: "categories",
    mongoQuery: null,
  });
  res.status(result.status).json(result);
};

const getAllTutors = async (req, res) => {
  let result = await findInDB({
    collectionName: "tutors",
    mongoQuery: { role: "tutor" },
  });

  res.status(result.status).json(result);
};

const getTutorProfileByUsername = async (req, res) => {
  const result = await findOneInDB({
    collectionName: "tutors",
    mongoQuery: { username: req.params.username.toLowerCase() },
  });
  // if (result.status === 200) {
  //   result.data.avatarImg = tutorImgs[result.data.username].avatarImg;
  // }

  res.status(result.status).json(result);
};

const getAllOrders = async (req, res) => {
  const result = await findInDB({ collectionName: "classReservations" });
  res.status(result.status).json(result);
};
const getOrdersByTutorUsername = async (req, res) => {
  const { tutorUsername } = req.params;
  const result = await findInDB({
    collectionName: "classReservations",
    mongoQuery: { tutorUsername: tutorUsername },
  });
  res.status(result.status).json(result);
};

const createOrder = async (req, res) => {
  const { firstname, lastname, age, email, phone, creditCard, expirationDate } =
    req.body;
  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !creditCard ||
    !expirationDate
  ) {
    res.status(400).json({
      status: 400,
      message: "Please provide all required information.",
    });
    return;
  }

  const { db, client } = await connectToDB();
  const { tutorUsername } = req.params;

  // const mongoQuery = { username: tutorUsername };
  const insertQuery = {
    tutorUsername,
    firstname,
    lastname,
    age,
    email,
    phone,
  };

  await db.collection("classReservations").insertOne(insertQuery);

  client.close();

  res.status(200).json({ status: 200, message: "reservation made" });
};

const getUserByUsername = async (req, res) => {
  console.log("Fake Get user by username");
  res.status(200).json({ status: 200, messge: "fake response" });
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
  handleGoogleLogin,
  getAllCategories,
  getAllTutors,
  getTutorProfileByUsername,
  getAllOrders,
  getOrdersByTutorUsername,
  createOrder,
  getUserByUsername,
};
