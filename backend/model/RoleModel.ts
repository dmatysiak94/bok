import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoleModel = new Schema({
    role: {
        type: String
    }
})