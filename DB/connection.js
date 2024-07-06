import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect("mongodb+srv://osama:Os191020013@cluster0.t10quvk.mongodb.net/node3")
    .then((result) => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export default connectDB;
