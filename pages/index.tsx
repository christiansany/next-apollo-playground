import { useSuspenseQuery } from "@apollo/client";
import Head from "next/head";
import { gql } from "__generated__/gql";
import { ProductLink } from "../components/ProductLink";

const GetProductsDocument = gql(/* GraphQL */ `
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          id
          ...ProductLink_Product
        }
      }
    }
  }
`);

export default function ProductList() {
  const { data, error } = useSuspenseQuery(GetProductsDocument);

  return (
    <div>
      <Head>
        <title>ProductList</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Products</h1>

        <ul>
          {data?.products.edges.map((edge) => (
            <li key={edge.node.id}>
              <ProductLink product={edge.node} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
