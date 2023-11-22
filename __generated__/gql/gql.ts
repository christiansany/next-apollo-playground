/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n      query GetProductDetails($id: ID!) {\n        product(id: $id) {\n          id\n          description\n        }\n      }\n    ": types.GetProductDetailsDocument,
    "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n": types.ProductLink_ProductFragmentDoc,
    "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n": types.UseProductUrl_ProductFragmentDoc,
    "\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n": types.GetProductsDocument,
    "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      price\n    }\n  }\n": types.GetProductDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query GetProductDetails($id: ID!) {\n        product(id: $id) {\n          id\n          description\n        }\n      }\n    "): (typeof documents)["\n      query GetProductDetails($id: ID!) {\n        product(id: $id) {\n          id\n          description\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"): (typeof documents)["\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"): (typeof documents)["\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      price\n    }\n  }\n"): (typeof documents)["\n  query GetProduct($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      price\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;