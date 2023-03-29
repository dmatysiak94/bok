"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'form'
    }
});
exports.default = mongoose_1.default.model('comment', CommentModel);
