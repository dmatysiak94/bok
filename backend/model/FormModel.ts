import mongoose from "mongoose";
import {IForm} from "../interface/IForm";

const Schema = mongoose.Schema;

const FormModel = new Schema<IForm>({
    topic: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    storeBranchId: {
        type: Schema.Types.ObjectId,
        ref: 'store-branch-dictionary'
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    consent: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now()
    },
    clicked: {
        type: Boolean,
        default: false
    },
    status: {
        type: Number
    },
    userAgent: {
    type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]
})

export default mongoose.model('form', FormModel);