import {GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {addForm, formClicked} from "../controller/FormController";
import {signIn} from "../controller/AuthController";

import FormSchema from "./schema/FormSchema";
import UserSchema from "./schema/UserSchema";
import StoreBranchDictionarySchema from "./schema/StoreBranchDictionarySchema";
import {addStoreBranch} from "../controller/StoreBranchDictionartyController";
import CommentSchema from "./schema/CommentSchema";
import {addComment} from "../controller/CommentController";

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addForm: {
            type: FormSchema,
            args: {
                topic: {type: new GraphQLNonNull(GraphQLString)},
                comment: {type: new GraphQLNonNull(GraphQLString)},
                storeBranchId: {type: GraphQLID},
                email: {type: GraphQLString},
                phoneNumber: {type: GraphQLString},
                consent: {type: GraphQLBoolean}
            },
            resolve(parentValue, {topic, comment, storeBranchId, email, phoneNumber, consent}, context) {
                return addForm(topic, comment, storeBranchId, email, phoneNumber, consent, context);
            }
        },
        formClicked: {
            type: FormSchema,
            args: {
                id: {type: GraphQLID},
            },
            resolve(parentValue, {id}) {
                return formClicked(id);
            }
        },
        addUser: {
            type: UserSchema,
            args: {
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)},
                confirmPassword: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, {email, password, confirmPassword}, request) {
                return signIn(email, password, confirmPassword);
            }
        },
        addStoreBranch: {
            type: StoreBranchDictionarySchema,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, {name}) {
                return addStoreBranch(name);
            }
        },
        addComment: {
            type: CommentSchema,
            args: {
                content: {type: new GraphQLNonNull(GraphQLString)},
                formId: {type: GraphQLID}
            },
            resolve(parentValue, {formId, content}) {
                return addComment(formId, content);
            }
        }
    }
})

export default mutation;