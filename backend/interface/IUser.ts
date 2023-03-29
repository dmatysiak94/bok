import mongoose from "mongoose";

export interface IUser extends Document{
    id: mongoose.Schema.Types.ObjectId;
    email: string;
    password: string;
}