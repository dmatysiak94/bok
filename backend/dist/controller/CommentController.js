"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = exports.findByFormId = void 0;
const FormModel_1 = __importDefault(require("../model/FormModel"));
const CommentModel_1 = __importDefault(require("../model/CommentModel"));
function findByFormId(formId) {
    return __awaiter(this, void 0, void 0, function* () {
        const comments = yield CommentModel_1.default.find({ formId: formId });
        return comments;
    });
}
exports.findByFormId = findByFormId;
function addComment(formId, content) {
    return __awaiter(this, void 0, void 0, function* () {
        const comment = new CommentModel_1.default({
            content: content,
            formId: formId
        });
        try {
            yield comment.save();
            yield FormModel_1.default.findOneAndUpdate({ _id: formId }, { $push: { comments: comment } }, { new: true });
        }
        catch (err) {
            console.log(err);
        }
        const savedComment = yield comment.save();
        return savedComment;
    });
}
exports.addComment = addComment;
