"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const RootQuery_1 = __importDefault(require("./RootQuery"));
const Mutation_1 = __importDefault(require("./Mutation"));
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery_1.default,
    mutation: Mutation_1.default
});
