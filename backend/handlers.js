"use strict";

const tutorImgs = require("./data/tutorImgs");
require("dotenv").config();
const { OAuth2Client } = require("google-auth-library");

const GOOGLE_OAUTH2_CLIENT_ID = process.env.GOOGLE_OAUTH2_CLIENT_ID;

const oAuth2Client = new OAuth2Client(GOOGLE_OAUTH2_CLIENT_ID);

const { connectToDB } = require("./dbConnector");
const { ObjectID } = require("mongodb");

const handleGoogleLogin = async (req, res) => {
  const { tokenId } = req.body;

  oAuth2Client
    .verifyIdToken({ idToken: tokenId, audience: GOOGLE_OAUTH2_CLIENT_ID })
    .then(async (response) => {
      const { given_name, family_name, picture, email, email_verified, name } =
        response.payload;
      console.log("respayload", response.payload);
      console.log("reqbody", req.body);

      if (email_verified) {
        const result = await findOneInDB({
          collectionName: "tutors",
          mongoQuery: { email },
        });

        if (result.data) {
          res.status(200).json(result);
        } else {
          // create a user with that name
          const newDocument = {
            email: email,
            username:
              given_name +
              family_name +
              String(Math.floor(Math.random() * 1000)),
            firstname: given_name,
            lastname: family_name,
            avatarImg: picture,
            role: "user",
          };

          const result = await insertOneInDB({
            collectionName: "tutors",
            document: newDocument,
          });
          if (result.status === 201) {
            const result2 = await findOneInDB({
              collectionName: "tutors",
              mongoQuery: { email },
            });
            res.status(201).json({ ...result, data: result2.data });
          } else {
            res.status(result.status).json(result);
          }
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

const updateTutorProfileByUsername = async (req, res) => {
  const { tutorUsername } = req.params;

  const mongoQuery = { username: tutorUsername };

  const result = await updateOneInDB({
    collectionName: "tutors",
    mongoQuery,
    updates: req.body,
  });

  let data;
  if (result.status === 200) {
    const result2 = await findOneInDB({
      collectionName: "tutors",
      mongoQuery,
    });
    data = result2.data;
  }

  res.status(result.status).json({ ...result, data });
};

const addReviewBytutorUsername = async (req, res) => {
  const { tutorUsername } = req.params;

  const mongoQuery = { username: tutorUsername };
  const pushQuery = { reviews: req.body };

  const result = await pushToArrayInDB({
    collectionName: "tutors",
    mongoQuery,
    pushQuery,
  });

  res.status(result.status).json(result);
};

const getAllOrders = async (req, res) => {
  const result = await findInDB({ collectionName: "classReservations" });
  res.status(result.status).json(result);
};

const deleteOrderById = async (req, res) => {
  const { orderId } = req.params;
  const _id = ObjectID(orderId);
  const mongoQuery = { _id: _id };
  const result = await DeleteOneInDB({
    collectionName: "classReservations",
    mongoQuery,
  });

  res.status(result.status).json(result);
};

const getOrdersByByEmail = async (req, res) => {
  const { email } = req.params;

  const result = await findInDB({
    collectionName: "classReservations",
    mongoQuery: { email: email },
  });
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
  const {
    firstname,
    lastname,
    age,
    email,
    phone,
    creditCard,
    expirationDate,
    classname,
    tutorFirstname,
    tutorLastname,
  } = req.body;
  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !creditCard ||
    !expirationDate ||
    !classname ||
    !tutorFirstname ||
    !tutorLastname
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
    classname,
    tutorFirstname,
    tutorLastname,
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
    return { status: 200, message: "success", data };
  } catch (err) {
    if (client) {
      client.close();
    }
    return { status: 500, message: "error" };
  }
};

const findOneInDB = async ({ collectionName, mongoQuery }) => {
  try {
    const { db, client } = await connectToDB();
    const data = await db.collection(collectionName).findOne(mongoQuery);

    client.close();

    if (data) {
      return { status: 200, message: "success", data };
    } else {
      return { status: 400, message: "bad request" };
    }
  } catch (err) {
    console.log("the error was ", err);
    if (client) {
      client.close();
    }
    return { status: 500, message: "error" };
  }
};

const insertOneInDB = async ({ collectionName, document }) => {
  try {
    const { db, client } = await connectToDB();
    const result = await db.collection(collectionName).insertOne(document);

    client.close();

    if (result.insertedCount === 1) {
      return { status: 201, message: "success, new user created." };
    } else {
      return { status: 400, message: "bad request, couldn't create new user." };
    }
  } catch (err) {
    console.log("the error was", err);
    if (client) {
      client.close();
    }
    return { status: 500, message: "error, couldn't create new user." };
  }
};

// collectionName: "tutors",
// mongoQuery: { username: tutorUsername },
// updates: { $set: { ...updates } }

const updateOneInDB = async ({ collectionName, mongoQuery, updates }) => {
  try {
    const { db, client } = await connectToDB();
    const result = await db
      .collection("tutors")
      .updateOne(mongoQuery, { $set: updates });

    client.close();

    if (result.matchedCount === 1) {
      return { status: 200, message: "success, the one document updated" };
    } else {
      return { status: 400, message: "bad request, couldn't do this request." };
    }
  } catch (err) {
    console.log("the error was", err);
    if (client) {
      client.close();
    }
    return { status: 500, message: "error, couldn't create new user." };
  }
};

const pushToArrayInDB = async ({ collectionName, mongoQuery, pushQuery }) => {
  try {
    const { db, client } = await connectToDB();
    const result = await db
      .collection(collectionName)
      .updateOne(mongoQuery, {
        $push: pushQuery,
      });

    client.close();

    // console.log("RRRRRRRRRR", result);

    if (result.modifiedCount === 1) {
      return { status: 200, message: "success, the one document updated" };
    } else {
      return { status: 400, message: "bad request, couldn't do this request." };
    }
  } catch (err) {
    console.log("the error was", err);
    if (client) {
      client.close();
    }
    return { status: 500, message: "error, couldn't create new user." };
  }
};

const DeleteOneInDB = async ({ collectionName, mongoQuery }) => {
  try {
    const { db, client } = await connectToDB();
    const result = await db.collection(collectionName).deleteOne(mongoQuery);

    client.close();

    if (result.deletedCount === 1) {
      return { status: 200, message: "success" };
    } else {
      return { status: 400, message: "bad request" };
    }
  } catch (err) {
    console.log("the error was ", err);
    if (client) {
      client.close();
    }
    return { status: 500, message: "error" };
  }
};

module.exports = {
  handleGoogleLogin,
  getAllCategories,
  getAllTutors,
  getTutorProfileByUsername,
  updateTutorProfileByUsername,
  addReviewBytutorUsername,
  getAllOrders,
  deleteOrderById,
  getOrdersByTutorUsername,
  getOrdersByByEmail,
  createOrder,
  getUserByUsername,
};
