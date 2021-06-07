const MongoClient = require("mongodb");
require("dotenv").config();

const connectToDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  console.log("MONGO_URI", MONGO_URI);

  const client = await MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const db = client.db("FinalProjectConcordiaBootcamp");

  return { db, client };
};

const findInDBAndSend = async ({ collectionName, mongoQuery, res }) => {
  try {
    const { db, client } = await connectToDB();
    const data = await db.collection(collectionName).find(mongoQuery).toArray();
    console.log('data', data);
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

module.exports = { connectToDB, findInDBAndSend };
