import mongoose, { Schema } from "mongoose";
import "dotenv/config";
import { UserModel } from "./model/user.model";

(async () => {
  try {
    await mongoose.connect(process.env.DB_HOST, {
      user: process.env.DB_USER_NAME,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    });
    // await UserModel.create({ name: "", email: "" });
    const user = await UserModel.find();
    console.log(user);
  } catch (err) {
    console.log("Failed to connect database", err);
  }
})();
