"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exampleSdl = "type A implements Node {\n  id: ID!\n  name: String!\n}\n\n\"\"\"A connection to a list of items.\"\"\"\ntype AConnection {\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"A list of edges.\"\"\"\n  edges: [AEdge]!\n  aggregate: AggregateA!\n}\n\ninput ACreateInput {\n  name: String!\n}\n\n\"\"\"An edge in a connection.\"\"\"\ntype AEdge {\n  \"\"\"The item at the end of the edge.\"\"\"\n  node: A!\n\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n}\n\ntype AggregateA {\n  count: Int!\n}\n\ntype AggregateB {\n  count: Int!\n}\n\ntype AggregateUser {\n  count: Int!\n}\n\nenum AOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  createdAt_ASC\n  createdAt_DESC\n}\n\ntype APreviousValues {\n  id: ID!\n  name: String!\n}\n\ntype ASubscriptionPayload {\n  mutation: MutationType!\n  node: A\n  updatedFields: [String!]\n  previousValues: APreviousValues\n}\n\ninput ASubscriptionWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [ASubscriptionWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [ASubscriptionWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [ASubscriptionWhereInput!]\n\n  \"\"\"\n  The subscription event gets dispatched when it's listed in mutation_in\n  \"\"\"\n  mutation_in: [MutationType!]\n\n  \"\"\"\n  The subscription event gets only dispatched when one of the updated fields names is included in this list\n  \"\"\"\n  updatedFields_contains: String\n\n  \"\"\"\n  The subscription event gets only dispatched when all of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_every: [String!]\n\n  \"\"\"\n  The subscription event gets only dispatched when some of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_some: [String!]\n  node: AWhereInput\n}\n\ninput AUpdateInput {\n  name: String\n}\n\ninput AWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [AWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [AWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [AWhereInput!]\n  id: ID\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  id_not: ID\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  id_in: [ID!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  id_not_in: [ID!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  id_lt: ID\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  id_lte: ID\n\n  \"\"\"All values greater than the given value.\"\"\"\n  id_gt: ID\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  id_gte: ID\n\n  \"\"\"All values containing the given string.\"\"\"\n  id_contains: ID\n\n  \"\"\"All values not containing the given string.\"\"\"\n  id_not_contains: ID\n\n  \"\"\"All values starting with the given string.\"\"\"\n  id_starts_with: ID\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  id_not_starts_with: ID\n\n  \"\"\"All values ending with the given string.\"\"\"\n  id_ends_with: ID\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  id_not_ends_with: ID\n  name: String\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  name_not: String\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  name_in: [String!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  name_not_in: [String!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  name_lt: String\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  name_lte: String\n\n  \"\"\"All values greater than the given value.\"\"\"\n  name_gt: String\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  name_gte: String\n\n  \"\"\"All values containing the given string.\"\"\"\n  name_contains: String\n\n  \"\"\"All values not containing the given string.\"\"\"\n  name_not_contains: String\n\n  \"\"\"All values starting with the given string.\"\"\"\n  name_starts_with: String\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  name_not_starts_with: String\n\n  \"\"\"All values ending with the given string.\"\"\"\n  name_ends_with: String\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  name_not_ends_with: String\n}\n\ninput AWhereUniqueInput {\n  id: ID\n}\n\ntype B implements Node {\n  id: ID!\n  name: String!\n}\n\ntype BatchPayload {\n  \"\"\"The number of nodes that have been affected by the Batch operation.\"\"\"\n  count: Long!\n}\n\n\"\"\"A connection to a list of items.\"\"\"\ntype BConnection {\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"A list of edges.\"\"\"\n  edges: [BEdge]!\n  aggregate: AggregateB!\n}\n\ninput BCreateInput {\n  name: String!\n}\n\n\"\"\"An edge in a connection.\"\"\"\ntype BEdge {\n  \"\"\"The item at the end of the edge.\"\"\"\n  node: B!\n\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n}\n\nenum BOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  createdAt_ASC\n  createdAt_DESC\n}\n\ntype BPreviousValues {\n  id: ID!\n  name: String!\n}\n\ntype BSubscriptionPayload {\n  mutation: MutationType!\n  node: B\n  updatedFields: [String!]\n  previousValues: BPreviousValues\n}\n\ninput BSubscriptionWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [BSubscriptionWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [BSubscriptionWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [BSubscriptionWhereInput!]\n\n  \"\"\"\n  The subscription event gets dispatched when it's listed in mutation_in\n  \"\"\"\n  mutation_in: [MutationType!]\n\n  \"\"\"\n  The subscription event gets only dispatched when one of the updated fields names is included in this list\n  \"\"\"\n  updatedFields_contains: String\n\n  \"\"\"\n  The subscription event gets only dispatched when all of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_every: [String!]\n\n  \"\"\"\n  The subscription event gets only dispatched when some of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_some: [String!]\n  node: BWhereInput\n}\n\ninput BUpdateInput {\n  name: String\n}\n\ninput BWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [BWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [BWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [BWhereInput!]\n  id: ID\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  id_not: ID\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  id_in: [ID!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  id_not_in: [ID!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  id_lt: ID\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  id_lte: ID\n\n  \"\"\"All values greater than the given value.\"\"\"\n  id_gt: ID\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  id_gte: ID\n\n  \"\"\"All values containing the given string.\"\"\"\n  id_contains: ID\n\n  \"\"\"All values not containing the given string.\"\"\"\n  id_not_contains: ID\n\n  \"\"\"All values starting with the given string.\"\"\"\n  id_starts_with: ID\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  id_not_starts_with: ID\n\n  \"\"\"All values ending with the given string.\"\"\"\n  id_ends_with: ID\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  id_not_ends_with: ID\n  name: String\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  name_not: String\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  name_in: [String!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  name_not_in: [String!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  name_lt: String\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  name_lte: String\n\n  \"\"\"All values greater than the given value.\"\"\"\n  name_gt: String\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  name_gte: String\n\n  \"\"\"All values containing the given string.\"\"\"\n  name_contains: String\n\n  \"\"\"All values not containing the given string.\"\"\"\n  name_not_contains: String\n\n  \"\"\"All values starting with the given string.\"\"\"\n  name_starts_with: String\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  name_not_starts_with: String\n\n  \"\"\"All values ending with the given string.\"\"\"\n  name_ends_with: String\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  name_not_ends_with: String\n}\n\ninput BWhereUniqueInput {\n  id: ID\n}\n\n\"\"\"\nThe `Long` scalar type represents non-fractional signed whole numeric values.\nLong can represent values between -(2^63) and 2^63 - 1.\n\"\"\"\nscalar Long\n\ntype Mutation {\n  createUser(data: UserCreateInput!): User!\n  createA(data: ACreateInput!): A!\n  createB(data: BCreateInput!): B!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  updateA(data: AUpdateInput!, where: AWhereUniqueInput!): A\n  updateB(data: BUpdateInput!, where: BWhereUniqueInput!): B\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteA(where: AWhereUniqueInput!): A\n  deleteB(where: BWhereUniqueInput!): B\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  upsertA(where: AWhereUniqueInput!, create: ACreateInput!, update: AUpdateInput!): A!\n  upsertB(where: BWhereUniqueInput!, create: BCreateInput!, update: BUpdateInput!): B!\n  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!\n  updateManyAs(data: AUpdateInput!, where: AWhereInput): BatchPayload!\n  updateManyBs(data: BUpdateInput!, where: BWhereInput): BatchPayload!\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n  deleteManyAs(where: AWhereInput): BatchPayload!\n  deleteManyBs(where: BWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\n\"\"\"An object with an ID\"\"\"\ninterface Node {\n  \"\"\"The id of the object.\"\"\"\n  id: ID!\n}\n\n\"\"\"Information about pagination in a connection.\"\"\"\ntype PageInfo {\n  \"\"\"When paginating forwards, are there more items?\"\"\"\n  hasNextPage: Boolean!\n\n  \"\"\"When paginating backwards, are there more items?\"\"\"\n  hasPreviousPage: Boolean!\n\n  \"\"\"When paginating backwards, the cursor to continue.\"\"\"\n  startCursor: String\n\n  \"\"\"When paginating forwards, the cursor to continue.\"\"\"\n  endCursor: String\n}\n\ntype Query {\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  as(where: AWhereInput, orderBy: AOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [A]!\n  bs(where: BWhereInput, orderBy: BOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [B]!\n  user(where: UserWhereUniqueInput!): User\n  a(where: AWhereUniqueInput!): A\n  b(where: BWhereUniqueInput!): B\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  asConnection(where: AWhereInput, orderBy: AOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AConnection!\n  bsConnection(where: BWhereInput, orderBy: BOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BConnection!\n\n  \"\"\"Fetches an object given its ID\"\"\"\n  node(\n    \"\"\"The ID of an object\"\"\"\n    id: ID!\n  ): Node\n}\n\ntype Subscription {\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n  a(where: ASubscriptionWhereInput): ASubscriptionPayload\n  b(where: BSubscriptionWhereInput): BSubscriptionPayload\n}\n\ntype User implements Node {\n  id: ID!\n  name: String!\n}\n\n\"\"\"A connection to a list of items.\"\"\"\ntype UserConnection {\n  \"\"\"Information to aid in pagination.\"\"\"\n  pageInfo: PageInfo!\n\n  \"\"\"A list of edges.\"\"\"\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  name: String!\n}\n\n\"\"\"An edge in a connection.\"\"\"\ntype UserEdge {\n  \"\"\"The item at the end of the edge.\"\"\"\n  node: User!\n\n  \"\"\"A cursor for use in pagination.\"\"\"\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n  name_ASC\n  name_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n  createdAt_ASC\n  createdAt_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n  name: String!\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [UserSubscriptionWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [UserSubscriptionWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [UserSubscriptionWhereInput!]\n\n  \"\"\"\n  The subscription event gets dispatched when it's listed in mutation_in\n  \"\"\"\n  mutation_in: [MutationType!]\n\n  \"\"\"\n  The subscription event gets only dispatched when one of the updated fields names is included in this list\n  \"\"\"\n  updatedFields_contains: String\n\n  \"\"\"\n  The subscription event gets only dispatched when all of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_every: [String!]\n\n  \"\"\"\n  The subscription event gets only dispatched when some of the field names included in this list have been updated\n  \"\"\"\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n}\n\ninput UserUpdateInput {\n  name: String\n}\n\ninput UserWhereInput {\n  \"\"\"Logical AND on all given filters.\"\"\"\n  AND: [UserWhereInput!]\n\n  \"\"\"Logical OR on all given filters.\"\"\"\n  OR: [UserWhereInput!]\n\n  \"\"\"Logical NOT on all given filters combined by AND.\"\"\"\n  NOT: [UserWhereInput!]\n  id: ID\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  id_not: ID\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  id_in: [ID!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  id_not_in: [ID!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  id_lt: ID\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  id_lte: ID\n\n  \"\"\"All values greater than the given value.\"\"\"\n  id_gt: ID\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  id_gte: ID\n\n  \"\"\"All values containing the given string.\"\"\"\n  id_contains: ID\n\n  \"\"\"All values not containing the given string.\"\"\"\n  id_not_contains: ID\n\n  \"\"\"All values starting with the given string.\"\"\"\n  id_starts_with: ID\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  id_not_starts_with: ID\n\n  \"\"\"All values ending with the given string.\"\"\"\n  id_ends_with: ID\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  id_not_ends_with: ID\n  name: String\n\n  \"\"\"All values that are not equal to given value.\"\"\"\n  name_not: String\n\n  \"\"\"All values that are contained in given list.\"\"\"\n  name_in: [String!]\n\n  \"\"\"All values that are not contained in given list.\"\"\"\n  name_not_in: [String!]\n\n  \"\"\"All values less than the given value.\"\"\"\n  name_lt: String\n\n  \"\"\"All values less than or equal the given value.\"\"\"\n  name_lte: String\n\n  \"\"\"All values greater than the given value.\"\"\"\n  name_gt: String\n\n  \"\"\"All values greater than or equal the given value.\"\"\"\n  name_gte: String\n\n  \"\"\"All values containing the given string.\"\"\"\n  name_contains: String\n\n  \"\"\"All values not containing the given string.\"\"\"\n  name_not_contains: String\n\n  \"\"\"All values starting with the given string.\"\"\"\n  name_starts_with: String\n\n  \"\"\"All values not starting with the given string.\"\"\"\n  name_not_starts_with: String\n\n  \"\"\"All values ending with the given string.\"\"\"\n  name_ends_with: String\n\n  \"\"\"All values not ending with the given string.\"\"\"\n  name_not_ends_with: String\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n}\n";