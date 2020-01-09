const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        squareIds: [String!]
        board: [Square]
    }

    input UserInput {
        id: ID!
    }

    input createUserInput {
        name: String!
    }

    input updateUserInput {
        id: ID!
        name: String
        squareIds: [String!]
    }

    type Square {
        id: ID!
        content: String!
    }

    input createSquareInput {
        content: String!
    }

    type Query {
        user(input: UserInput): User!
        users: [User]!
        squares: [Square]!
    }

    type Mutation {
        createUser(input: createUserInput!): User!
        updateUser(input: updateUserInput!): User!
        createSquare(input: createSquareInput!): Square!
    }
`;

module.exports = typeDefs;
