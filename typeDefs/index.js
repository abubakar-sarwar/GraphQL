import { mergeTypeDefs } from "@graphql-tools/merge";

import UserTypeDefs from "./user.typeDef.js";

const merged = mergeTypeDefs([UserTypeDefs]);

export default merged;
