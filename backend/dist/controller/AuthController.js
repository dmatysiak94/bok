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
exports.logIn = exports.signIn = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const Validator_1 = require("../validator/Validator");
function signIn(email, password, confirmPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, Validator_1.validateUserCreation)(email, password, confirmPassword);
        const hashPass = yield bcryptjs_1.default.hash(password, 12);
        const userToSave = new UserModel_1.default({
            email: email,
            password: hashPass
        });
        let savedUser;
        try {
            savedUser = yield userToSave.save();
        }
        catch (err) {
            const error = new Error('fefe');
            throw error;
        }
        return savedUser;
    });
}
exports.signIn = signIn;
function logIn(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserModel_1.default.findOne({ email: email });
        if (!user) {
            throw new Error('user or pass error');
        }
        const hashPass = yield bcryptjs_1.default.compare(password, user.password);
        if (!hashPass) {
            throw new Error('user or pass error');
        }
        const token = jsonwebtoken_1.default.sign({
            'loggedIn': true,
            userId: user.id
        }, 'superTrudneHaslo', { expiresIn: '12h' });
        return { token: token };
    });
}
exports.logIn = logIn;
