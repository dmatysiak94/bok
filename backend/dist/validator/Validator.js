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
exports.validateUserCreation = void 0;
const validator_1 = __importDefault(require("validator"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const HttpError_1 = require("../interface/HttpError");
function validateUserCreation(email, password, confirmPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        let errors = [];
        if (yield UserModel_1.default.findOne({ email: email })) {
            errors.push('email already exists');
        }
        if (!validator_1.default.isEmail(email)) {
            errors.push('wrong email');
        }
        if (!validator_1.default.equals(password, confirmPassword)) {
            errors.push('password mismatch');
        }
        if (errors.length > 0) {
            throw new HttpError_1.HttpError(errors.toString());
        }
    });
}
exports.validateUserCreation = validateUserCreation;
