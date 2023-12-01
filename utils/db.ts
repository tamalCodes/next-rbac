import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
