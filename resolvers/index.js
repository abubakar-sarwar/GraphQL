import { mergeResolvers } from "@graphql-tools/merge";

import UserResolver from "./user.resolver.js";

const resolvers = mergeResolvers([UserResolver]);

export default resolvers;
