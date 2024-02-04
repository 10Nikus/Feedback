import mongoose from "mongoose";
const connect = async () => {
  const mongoUrl = process.env.MONGO_URL;
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
};

export default connect;
