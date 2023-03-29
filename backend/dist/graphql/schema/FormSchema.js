"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const StoreBranchDictionarySchema_1 = __importDefault(require("./StoreBranchDictionarySchema"));
const StoreBranchDictionartyController_1 = require("../../controller/StoreBranchDictionartyController");
const CommentSchema_1 = __importDefault(require("./CommentSchema"));
const CommentController_1 = require("../../controller/CommentController");
const FormSchema = new graphql_1.GraphQLObjectType({
    name: 'Form',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        topic: {
            type: graphql_1.GraphQLString
        },
        comment: {
            type: graphql_1.GraphQLString,
        },
        storeBranch: {
            type: StoreBranchDictionarySchema_1.default,
            resolve(parentValue, args) {
                return (0, StoreBranchDictionartyController_1.findStoreById)(parentValue.storeBranchId);
            }
        },
        comments: {
            type: new graphql_1.GraphQLList(CommentSchema_1.default),
            resolve(parentValue, args) {
                return (0, CommentController_1.findByFormId)(parentValue.id);
            }
        },
        email: {
            type: graphql_1.GraphQLString
        },
        phoneNumber: {
            type: graphql_1.GraphQLString
        },
        consent: {
            type: graphql_1.GraphQLBoolean
        },
        timestamp: {
            type: graphql_1.GraphQLString
        },
        clicked: {
            type: graphql_1.GraphQLBoolean
        },
        status: {
            type: graphql_1.GraphQLInt
        },
        created: {
            type: graphql_1.GraphQLString
        },
        userAgent: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = FormSchema;
