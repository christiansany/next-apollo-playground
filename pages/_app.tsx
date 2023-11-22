import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "../src/apollo-client";
import { useMemo } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = useMemo(() => {
    return getApolloClient();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
