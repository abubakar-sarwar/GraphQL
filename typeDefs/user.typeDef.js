const userTypeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
    profile: String
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }
`;

export default userTypeDefs;
