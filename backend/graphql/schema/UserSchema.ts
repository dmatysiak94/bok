import {
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


const UserSchema = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        email: {
            type: GraphQLString
        }
    })
})
export default UserSchema;