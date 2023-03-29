import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString
} from "graphql";


const StoreBranchDictionarySchema = new GraphQLObjectType({
    name: 'storeBranchDictionary',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        }
    })
})
export default StoreBranchDictionarySchema;