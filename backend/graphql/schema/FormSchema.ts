import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt, GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import StoreBranchDictionarySchema from "./StoreBranchDictionarySchema";
import {findStoreById} from "../../controller/StoreBranchDictionartyController";
import CommentSchema from "./CommentSchema";
import {findByFormId} from "../../controller/CommentController";

const FormSchema = new GraphQLObjectType({
    name: 'Form',
    fields: () => ({
        id: { type: GraphQLID },
        topic: {
            type: GraphQLString
        },
        comment: {
            type: GraphQLString,
        },
        storeBranch: {
            type: StoreBranchDictionarySchema,
            resolve(parentValue, args) {
                return findStoreById(parentValue.storeBranchId)
            }
        },
        comments: {
            type: new GraphQLList(CommentSchema),
            resolve(parentValue, args) {
                return findByFormId(parentValue.id)
            }
        },
        email: {
            type: GraphQLString
        },
        phoneNumber: {
            type: GraphQLString
        },
        consent: {
            type: GraphQLBoolean
        },
        timestamp: {
            type: GraphQLString
        },
        clicked: {
            type: GraphQLBoolean
        },
        status: {
            type: GraphQLInt
        },
        created: {
            type: GraphQLString
        },
        userAgent: {
            type: GraphQLString
        }
    })
})
export default FormSchema;