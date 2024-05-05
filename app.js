import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import connectToDatabase from "./connection.js";
import resolvers from "./resolvers/index.js";
import typeDefs from "./typeDefs/index.js";
import { buildSchema, print } from "graphql";

const schema = buildSchema(print(typeDefs));

// dotEnv Configuration
dotenv.config();

const app = express();

// JSON Configuration
app.use(express.json());

// Cors Configuration
app.use(cors());

// Mongoose Connection
connectToDatabase();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

// Listening to a server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT || 8000}`);
});
