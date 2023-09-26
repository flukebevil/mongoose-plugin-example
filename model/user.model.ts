import { Schema, model, connect } from "mongoose";
import { myCustomPlugin } from "../plugin/loading-time.plugin";

interface IUser {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

userSchema.plugin(myCustomPlugin);

export const UserModel = model<IUser>("User", userSchema);
