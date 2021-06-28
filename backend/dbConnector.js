const MongoClient = require("mongodb");
require("dotenv").config();

const connectToDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  const client = await MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const db = client.db("FinalProjectConcordiaBootcamp");

  return { db, client };
};

const findInDB = async ({ collectionName, mongoQuery }) => {
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
    const result = await db.collection(collectionName).updateOne(mongoQuery, {
      $push: pushQuery,
    });

    client.close();

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

const deleteOneInDB = async ({ collectionName, mongoQuery }) => {
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
  connectToDB,
  findInDB,
  findOneInDB,
  insertOneInDB,
  updateOneInDB,
  pushToArrayInDB,
  deleteOneInDB,
};
