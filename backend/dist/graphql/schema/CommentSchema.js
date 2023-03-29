"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CommentSchema = new graphql_1.GraphQLObjectType({
    name: 'comment',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLID
        },
        content: {
            type: graphql_1.GraphQLString
        },
        created: {
            type: graphql_1.GraphQLString
        },
        formId: {
            type: graphql_1.GraphQLID
        }
    })
});
exports.default = CommentSchema;
