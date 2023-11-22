import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  HTML: any;
};

/**
 * Returns a Connection, in accordance with
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types).
 */
export type Connection = {
  /** A list of edges. */
  edges: Array<Edge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type Contribution = {
  creator: User;
};

export type DisplayableError = {
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

/** A generic interface which holds one Edge and a cursor during pagination. */
export type Edge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item implementing the node interface. */
  node: Node;
};

export type Mutation = {
  __typename?: 'Mutation';
  productCreate?: Maybe<ProductCreatePayload>;
  productUpdate?: Maybe<ProductUpdatePayload>;
  userCreate?: Maybe<UserCreatePayload>;
  userUpdate?: Maybe<UserUpdatePayload>;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductUpdateArgs = {
  input: ProductUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

/**
 * An object with an ID field to support global identification, in accordance with the [Relay
 * specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 */
export type Node = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  productRatings: ProductRatingConnection;
  productRatingsSummary: ProductRatingsSummary;
};


export type ProductProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProductConnection = Connection & {
  __typename?: 'ProductConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
};

export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload';
  product?: Maybe<Product>;
  userErrors: Array<UserError>;
};

export type ProductEdge = Edge & {
  __typename?: 'ProductEdge';
  cursor: Scalars['String'];
  node: Product;
};

export type ProductRating = Contribution & Node & Timestamps & Votable & {
  __typename?: 'ProductRating';
  comments: ProductRatingCommentConnection;
  cons?: Maybe<Array<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  creator: User;
  creatorIsVerifiedBuyer: Scalars['Boolean'];
  id: Scalars['ID'];
  product: Product;
  pros?: Maybe<Array<Scalars['String']>>;
  ratingScore: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};


export type ProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ProductRatingComment = Contribution & Node & Timestamps & Votable & {
  __typename?: 'ProductRatingComment';
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['ID'];
  rating: ProductRating;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};

export type ProductRatingCommentConnection = Connection & {
  __typename?: 'ProductRatingCommentConnection';
  edges: Array<ProductRatingCommentEdge>;
  pageInfo: PageInfo;
};

export type ProductRatingCommentEdge = Edge & {
  __typename?: 'ProductRatingCommentEdge';
  cursor: Scalars['String'];
  node: ProductRatingComment;
};

export type ProductRatingConnection = Connection & {
  __typename?: 'ProductRatingConnection';
  edges: Array<ProductRatingEdge>;
  pageInfo: PageInfo;
};

export type ProductRatingEdge = Edge & {
  __typename?: 'ProductRatingEdge';
  cursor: Scalars['String'];
  node: ProductRating;
};

export type ProductRatingsSummary = {
  __typename?: 'ProductRatingsSummary';
  averageRating: Scalars['Float'];
  totalRatings: Scalars['Int'];
};

export enum ProductSortKey {
  Id = 'ID',
  Price = 'PRICE'
}

export type ProductUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload';
  product?: Maybe<Product>;
  userErrors: Array<UserError>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  node?: Maybe<Node>;
  nodes: Array<Node>;
  product?: Maybe<Product>;
  productRating?: Maybe<ProductRating>;
  productRatingComment?: Maybe<ProductRatingComment>;
  productRatingComments: ProductRatingCommentConnection;
  productRatings: ProductRatingConnection;
  products: ProductConnection;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingCommentArgs = {
  id: Scalars['ID'];
};


export type QueryProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: Scalars['Boolean'];
  sortKey?: ProductSortKey;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: Scalars['Boolean'];
  sortKey?: UserSortKey;
};

export type Timestamps = {
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  productRatingComments: ProductRatingCommentConnection;
  productRatings: ProductRatingConnection;
  username: Scalars['String'];
};


export type UserProductRatingCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type UserProductRatingsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserCreateInput = {
  email: Scalars['String'];
  height: Scalars['Int'];
  username: Scalars['String'];
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserError = DisplayableError & {
  __typename?: 'UserError';
  field?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

export enum UserSortKey {
  Email = 'EMAIL',
  Height = 'HEIGHT',
  Id = 'ID',
  Username = 'USERNAME'
}

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  username?: InputMaybe<Scalars['String']>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
  userErrors: Array<UserError>;
};

export type Votable = {
  userVote?: Maybe<Vote>;
  votesSummary: VotesSummary;
};

export type Vote = Timestamps & {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type: VoteType;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum VoteType {
  AbusiveVote = 'AbusiveVote',
  DownVote = 'DownVote',
  UpVote = 'UpVote'
}

export type VotesSummary = {
  __typename?: 'VotesSummary';
  /** All cumulative AbusiveVotes */
  countAbusive: Scalars['Int'];
  /** All cumulative DownVotes */
  countDown: Scalars['Int'];
  /** All cumulative UpVotes */
  countUp: Scalars['Int'];
  /** Score is determined as UpVote - DownVote */
  score: Scalars['Int'];
};

export type GetProductDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductDetailsQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, description: string } | null };

export type ProductLink_ProductFragment = { __typename?: 'Product', name: string, id: string };

export type UseProductUrl_ProductFragment = { __typename?: 'Product', id: string };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, name: string } }> } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, name: string, price: number } | null };

export const UseProductUrl_ProductFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"useProductUrl_Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<UseProductUrl_ProductFragment, unknown>;
export const ProductLink_ProductFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductLink_Product"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"useProductUrl_Product"}}]}},...UseProductUrl_ProductFragmentDoc.definitions]} as unknown as DocumentNode<ProductLink_ProductFragment, unknown>;
export const GetProductDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetProductDetailsQuery, GetProductDetailsQueryVariables>;
export const GetProductsDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductLink_Product"}}]}}]}}]}}]}},...ProductLink_ProductFragmentDoc.definitions]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]} as unknown as DocumentNode<GetProductQuery, GetProductQueryVariables>;