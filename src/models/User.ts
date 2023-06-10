import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  email: string;
  name: string
}

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  name: String,
}, {
  timestamps: true
});

const User = models.User || model<IUser>('User', userSchema)
export default User