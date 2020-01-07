const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
    }

    type Square {
        id: ID!
        content: String!
    }

    type Query {
        user: User!
        users: [User]!
        squares: [Square]!
    }
`;

module.exports = typeDefs;
