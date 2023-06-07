import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb+srv://lamadev:lamadev@cluster0.n1tkghc.mongodb.net/");
  } catch (error) {
    throw new Error("Connection failed!", error);
  }
};

export default connect;
