"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const UserSchema = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID
        },
        email: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = UserSchema;
