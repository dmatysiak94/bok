import {GraphQLSchema} from "graphql";
import RootQuery from "./RootQuery";
import mutation from "./Mutation";

export default new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})