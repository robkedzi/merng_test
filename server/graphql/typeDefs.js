const gql = require("graphql-tag");

const typeDefs = gql`
  type Post {
    id: ID!
    author: String!
    content: String!
  }

  type Query {
    getPosts: [Post]
  }
`;

module.exports = typeDefs;
