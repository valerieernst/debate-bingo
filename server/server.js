const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');

const server = new ApolloServer();

server.listen()
    .then(({ url }) => {
        console.log(`Server listening at ${url}`);
    });
