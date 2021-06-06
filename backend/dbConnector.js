const MongoClient = require("mongodb");
require("dotenv").config();

const connectToDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  console.log('MONGO_URI', MONGO_URI);

  const client = await MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const db = client.db("FinalProjectConcordiaBootcamp");

  return {db , client};
};

module.exports = { connectToDB };
