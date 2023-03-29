"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const FormModel_1 = __importDefault(require("../model/FormModel"));
const FormSchema_1 = __importDefault(require("./schema/FormSchema"));
const UserSchema_1 = __importDefault(require("./schema/UserSchema"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const AuthController_1 = require("../controller/AuthController");
const TokenSchema_1 = __importDefault(require("./schema/TokenSchema"));
const StoreBranchModel_1 = __importDefault(require("../model/StoreBranchModel"));
const StoreBranchDictionarySchema_1 = __importDefault(require("./schema/StoreBranchDictionarySchema"));
const CommentSchema_1 = __importDefault(require("./schema/CommentSchema"));
const CommentController_1 = require("../controller/CommentController");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        forms: {
            type: new graphql_1.GraphQLList(FormSchema_1.default),
            resolve() {
                return FormModel_1.default.find({}).sort({ created: -1 });
            }
        },
        form: {
            type: FormSchema_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return FormModel_1.default.findById({ _id: id });
            }
        },
        comment: {
            type: CommentSchema_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return (0, CommentController_1.findByFormId)(id);
            }
        },
        user: {
            type: new graphql_1.GraphQLList(UserSchema_1.default),
            resolve() {
                return UserModel_1.default.find({});
            }
        },
        login: {
            type: TokenSchema_1.default,
            args: { email: { type: graphql_1.GraphQLString }, password: { type: graphql_1.GraphQLString } },
            resolve(parentVale, { email, password }) {
                return (0, AuthController_1.logIn)(email, password);
            }
        },
        storeBranchDictionary: {
            type: new graphql_1.GraphQLList(StoreBranchDictionarySchema_1.default),
            resolve() {
                return StoreBranchModel_1.default.find({});
            }
        }
    })
});
exports.default = RootQuery;
