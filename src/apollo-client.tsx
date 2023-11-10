import { InMemoryCache, ApolloClient } from "@apollo/client";
import { StrictTypedTypePolicies } from "__generated__/apollo-helpers";

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      product: {
        read: (_, { args, toReference }) => {
          if (!args?.id) return null;

          return toReference({
            __typename: "Product",
            id: args.id,
          });
        },
      },
    },
  },
};

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({ typePolicies }),
});
