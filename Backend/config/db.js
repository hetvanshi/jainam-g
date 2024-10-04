import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://jainamG:Hetvanshi@cluster0.foyaxmn.mongodb.net/JainamG").then(() => console.log("db connected"));
}