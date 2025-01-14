const express = require('express');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const menu = require('./static/menu-data.json');
const gqlSchema = require('./static/gql-schema');

const port = 3000;
const app = express();

app.use(cors());

app.get('/api/v1/menu', (req, res) => {
    res.json(menu);
});

app.use('/graphql', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    graphqlHTTP({
        schema: buildSchema(gqlSchema),
        rootValue: { menu: () => menu },
        graphiql: true,
    })(req, res);
});

app.listen(port, () => {
    console.log(`The API server is running at http://localhost:${port}/api`);
    console.log(`The GraphQL server is running at http://localhost:${port}/graphql`);
});
