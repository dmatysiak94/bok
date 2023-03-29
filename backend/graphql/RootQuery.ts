import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import FormModel from "../model/FormModel";
import FormSchema from "./schema/FormSchema";
import UserSchema from "./schema/UserSchema";
import UserModel from "../model/UserModel";
import {logIn} from '../controller/AuthController'
import TokenSchema from "./schema/TokenSchema";
import StoreBranchDictionaryModel from "../model/StoreBranchModel";
import StoreBranchDictionarySchema from "./schema/StoreBranchDictionarySchema";
import CommentSchema from "./schema/CommentSchema";
import CommentModel from "../model/CommentModel";
import {findByFormId} from "../controller/CommentController";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        forms: {
            type: new GraphQLList(FormSchema),
            resolve() {
                return FormModel.find({}).sort({created: -1});
            }
        },
        form: {
            type: FormSchema,
            args: {id: {type : GraphQLID}},
            resolve(parentValue, {id}) {
                return FormModel.findById({_id : id});
            }
        },
        comment: {
            type: CommentSchema,
            args: {id: {type : GraphQLID}},
            resolve(parentValue,{id}) {
                return findByFormId(id);
            }
        },
        user: {
            type: new GraphQLList(UserSchema),
            resolve() {
                return UserModel.find({});
            }
        },
        login: {
            type: TokenSchema,
            args: {email: {type : GraphQLString}, password: {type: GraphQLString}},
            resolve(parentVale, {email, password}) {
                return logIn(email, password);
            }
        },
        storeBranchDictionary: {
            type: new GraphQLList(StoreBranchDictionarySchema),
            resolve() {
                return StoreBranchDictionaryModel.find({});
            }
        }
    })
});

export default RootQuery;