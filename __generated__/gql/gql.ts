/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n": graphql.ProductLink_ProductFragmentDoc,
    "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n": graphql.UseProductUrl_ProductFragmentDoc,
    "\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n": graphql.GetProductsDocument,
    "\n  query GetProduct ($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      price\n    }\n  }\n": graphql.GetProductDocument,
};

export function gql(source: "\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"): (typeof documents)["\n  fragment ProductLink_Product on Product {\n    name\n    ...useProductUrl_Product\n  }\n"];
export function gql(source: "\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"): (typeof documents)["\n  fragment useProductUrl_Product on Product {\n    id\n  }\n"];
export function gql(source: "\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProducts {\n    products(first: 10) {\n      edges {\n        node {\n          id\n          ...ProductLink_Product\n        }\n      }\n    }\n  }\n"];
export function gql(source: "\n  query GetProduct ($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      price\n    }\n  }\n"): (typeof documents)["\n  query GetProduct ($id: ID!) {\n    product(id: $id) {\n      id\n      name\n      description\n      price\n    }\n  }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;