import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await connect(`${process.env.MONGO_URI}`);
    console.log("db connection is successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
