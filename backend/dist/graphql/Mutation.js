"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const FormController_1 = require("../controller/FormController");
const AuthController_1 = require("../controller/AuthController");
const FormSchema_1 = __importDefault(require("./schema/FormSchema"));
const UserSchema_1 = __importDefault(require("./schema/UserSchema"));
const StoreBranchDictionarySchema_1 = __importDefault(require("./schema/StoreBranchDictionarySchema"));
const StoreBranchDictionartyController_1 = require("../controller/StoreBranchDictionartyController");
const CommentSchema_1 = __importDefault(require("./schema/CommentSchema"));
const CommentController_1 = require("../controller/CommentController");
const mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addForm: {
            type: FormSchema_1.default,
            args: {
                topic: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                comment: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                storeBranchId: { type: graphql_1.GraphQLID },
                email: { type: graphql_1.GraphQLString },
                phoneNumber: { type: graphql_1.GraphQLString },
                consent: { type: graphql_1.GraphQLBoolean }
            },
            resolve(parentValue, { topic, comment, storeBranchId, email, phoneNumber, consent }, context) {
                return (0, FormController_1.addForm)(topic, comment, storeBranchId, email, phoneNumber, consent, context);
            }
        },
        formClicked: {
            type: FormSchema_1.default,
            args: {
                id: { type: graphql_1.GraphQLID },
            },
            resolve(parentValue, { id }) {
                return (0, FormController_1.formClicked)(id);
            }
        },
        addUser: {
            type: UserSchema_1.default,
            args: {
                email: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                confirmPassword: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve(parentValue, { email, password, confirmPassword }, request) {
                return (0, AuthController_1.signIn)(email, password, confirmPassword);
            }
        },
        addStoreBranch: {
            type: StoreBranchDictionarySchema_1.default,
            args: {
                name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve(parentValue, { name }) {
                return (0, StoreBranchDictionartyController_1.addStoreBranch)(name);
            }
        },
        addComment: {
            type: CommentSchema_1.default,
            args: {
                content: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                formId: { type: graphql_1.GraphQLID }
            },
            resolve(parentValue, { formId, content }) {
                return (0, CommentController_1.addComment)(formId, content);
            }
        }
    }
});
exports.default = mutation;
