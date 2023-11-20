import { connect } from "mongoose";
import "dotenv/config";

const URL = process.env.MONGO_URI;

const connectionToMongoDb = async () => {
  try {
    await connect(URL as string);
    return "connected to mongoDB";
  } catch (error) {
    return Promise.reject(`An error accrued while connecting to DB  ${error}`);
  }
};

export default connectionToMongoDb;
