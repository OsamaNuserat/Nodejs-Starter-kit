import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_LOCAL)
    .then((result) => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export default connectDB;
