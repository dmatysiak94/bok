import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

const TokenSchema = new GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        token: {
            type: GraphQLString
        }
    })
});

export default TokenSchema;