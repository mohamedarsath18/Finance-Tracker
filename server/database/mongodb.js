import mongoose from "mongoose";

async function connect() {
  const username = process.env.MONGO_DB_USERNAME;
  const password = process.env.MONGO_DB_PASSWORD;
  const url = process.env.MONGO_DB_URL;
  await mongoose
    .connect(
      `mongodb+srv://arsathalc:arsathalc@cluster1.pz9ox.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`
    )
    .then(() => console.log("MongoDB connection is successful"));
}

export default connect;
