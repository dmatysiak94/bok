import mongoose from "mongoose";
import {IUser} from "../interface/IUser";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const UserModel = new Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model('user', UserModel);