import express, {Express} from 'express';
import {graphqlHTTP} from 'express-graphql';
import mongoose from "mongoose";
import cors from 'cors';

import schema from './graphql/Schema'

const app: Express = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bok')
    .then((data) => {
        app.listen(8080, () => {
            console.log('connected')
        })
    })

app.use(
    '/graphql',
    graphqlHTTP((request, response, graphQLParams) => ({
        schema: schema,
        graphiql: true
    }))
);
