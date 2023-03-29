import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri : "http://localhost:8080/graphql"
})

export default apolloClient;