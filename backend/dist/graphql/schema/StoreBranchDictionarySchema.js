"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const StoreBranchDictionarySchema = new graphql_1.GraphQLObjectType({
    name: 'storeBranchDictionary',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID
        },
        name: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = StoreBranchDictionarySchema;
