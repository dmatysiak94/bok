import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StoreBranchDictionaryModel = new Schema({
    name: {
        type: String,
        required: true
    }
})

export default mongoose.model('store-branch-dictionary', StoreBranchDictionaryModel);