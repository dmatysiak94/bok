"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(errMessage) {
        super(errMessage);
    }
}
exports.HttpError = HttpError;
