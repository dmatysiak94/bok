"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const FormModel = new Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]
});
exports.default = mongoose_1.default.model('form', FormModel);
