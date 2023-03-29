import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentModel = new Schema({
    content: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: new Date()
    },
    formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'form'
    }
})

export default mongoose.model('comment', CommentModel);