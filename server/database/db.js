import mongoose from "mongoose";

export const Connection = async (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@flipkartclone.vpl8ors.mongodb.net/?retryWrites=true&w=majority&appName=FlipkartClone`;
  try {
    await mongoose.connect(URL);
    console.log("Database Connect Succesfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
