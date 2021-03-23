const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

const { MONGODB } = require("./config");
const { Post } = require("./db");
const typeDefs = require("./graphql/typeDefs");
const postResolver = require("./graphql/resolvers/post");

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: postResolver,
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4000, () => {
      console.log(
        "Running a GraphQL API server at http://localhost:4000/graphql"
      );
    });
  });
