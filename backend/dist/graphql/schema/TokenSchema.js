"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const TokenSchema = new graphql_1.GraphQLObjectType({
    name: 'Token',
    fields: () => ({
        token: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = TokenSchema;
