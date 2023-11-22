import {
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";
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

let client: ApolloClient<NormalizedCacheObject>;

export const getApolloClient = () => {
  if (typeof window === "undefined") {
    return new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache({ typePolicies }),
      ssrMode: typeof window === "undefined",
    });
  }

  if (!client) {
    client = new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache({ typePolicies }),
      ssrMode: typeof window === "undefined",
      connectToDevTools: true,
    });
  }

  return client;
};
