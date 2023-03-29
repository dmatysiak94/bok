"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const Schema_1 = __importDefault(require("./graphql/Schema"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/bok')
    .then((data) => {
    app.listen(8080, () => {
        console.log('connected');
    });
});
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)((request, response, graphQLParams) => ({
    schema: Schema_1.default,
    graphiql: true
})));
