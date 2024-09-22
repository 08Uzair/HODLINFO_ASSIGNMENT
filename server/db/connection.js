import mongoose from "mongoose";

const URI =
  "mongodb+srv://hodlinfo:hodlinfo111@cluster0.5m3dv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const dataBaseConnection = async () => { 
  try {
    await mongoose.connect(URI);
    console.log("DataBase is Connected");
  } catch (error) {
    console.log(error);
  }
};
