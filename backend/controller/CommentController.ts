import FormModel from "../model/FormModel";
import mongoose from "mongoose";
import CommentModel from "../model/CommentModel";
import StoreBranchModel from "../model/StoreBranchModel";
import {IForm} from "../interface/IForm";

export async function findByFormId(formId: mongoose.Schema.Types.ObjectId) {
    const comments = await CommentModel.find({formId: formId})

    return comments;
}

export async function addComment(formId: mongoose.Schema.Types.ObjectId, content: string) {

    const comment = new CommentModel({
        content: content,
        formId: formId
    });

    try {
        await comment.save();
        await FormModel.findOneAndUpdate({_id: formId}, {$push: {comments: comment}}, {new: true})
    } catch (err) {
        console.log(err);
    }

    const savedComment = await comment.save();

    return savedComment;
}