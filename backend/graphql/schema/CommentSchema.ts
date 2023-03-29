import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";

const CommentSchema = new GraphQLObjectType({
    name: 'comment',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        content: {
            type: GraphQLString
        },
        created: {
            type: GraphQLString
        },
        formId: {
            type: GraphQLID
        }
    })
})
export default CommentSchema;