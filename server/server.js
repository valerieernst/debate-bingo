const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolvers');
const db =  require('./src/db/database');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return { db };
    }
});

server.listen()
    .then(({ url }) => {
        console.log(`Server listening at ${url}`);
    });
