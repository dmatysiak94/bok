import StoreBranchModel from "../model/StoreBranchModel";
import mongoose from "mongoose";

export function addStoreBranch(name: string) {
    const stores = new StoreBranchModel({
        name: name,
    });

    stores.save().then(result => {
        return result._id
    })
}

export async function findStoreById(id: mongoose.Schema.Types.ObjectId) {

    const branch = await StoreBranchModel.findOne({_id: id});
    return branch;
}