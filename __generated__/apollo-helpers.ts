import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ConnectionKeySpecifier = ('edges' | 'pageInfo' | ConnectionKeySpecifier)[];
export type ConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionKeySpecifier = ('creator' | ContributionKeySpecifier)[];
export type ContributionFieldPolicy = {
	creator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DisplayableErrorKeySpecifier = ('field' | 'message' | DisplayableErrorKeySpecifier)[];
export type DisplayableErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EdgeKeySpecifier = ('cursor' | 'node' | EdgeKeySpecifier)[];
export type EdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('productCreate' | 'productUpdate' | 'userCreate' | 'userUpdate' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	productCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	productUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	userCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	userUpdate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('description' | 'id' | 'name' | 'price' | 'productRatings' | 'productRatingsSummary' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatingsSummary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductConnectionKeySpecifier = ('edges' | 'pageInfo' | ProductConnectionKeySpecifier)[];
export type ProductConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductCreatePayloadKeySpecifier = ('product' | 'userErrors' | ProductCreatePayloadKeySpecifier)[];
export type ProductCreatePayloadFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductEdgeKeySpecifier = ('cursor' | 'node' | ProductEdgeKeySpecifier)[];
export type ProductEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingKeySpecifier = ('comments' | 'cons' | 'createdAt' | 'creator' | 'creatorIsVerifiedBuyer' | 'id' | 'product' | 'pros' | 'ratingScore' | 'text' | 'title' | 'updatedAt' | 'userVote' | 'votesSummary' | ProductRatingKeySpecifier)[];
export type ProductRatingFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	cons?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	creatorIsVerifiedBuyer?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	pros?: FieldPolicy<any> | FieldReadFunction<any>,
	ratingScore?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userVote?: FieldPolicy<any> | FieldReadFunction<any>,
	votesSummary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingCommentKeySpecifier = ('createdAt' | 'creator' | 'id' | 'rating' | 'text' | 'updatedAt' | 'userVote' | 'votesSummary' | ProductRatingCommentKeySpecifier)[];
export type ProductRatingCommentFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userVote?: FieldPolicy<any> | FieldReadFunction<any>,
	votesSummary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingCommentConnectionKeySpecifier = ('edges' | 'pageInfo' | ProductRatingCommentConnectionKeySpecifier)[];
export type ProductRatingCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingCommentEdgeKeySpecifier = ('cursor' | 'node' | ProductRatingCommentEdgeKeySpecifier)[];
export type ProductRatingCommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingConnectionKeySpecifier = ('edges' | 'pageInfo' | ProductRatingConnectionKeySpecifier)[];
export type ProductRatingConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingEdgeKeySpecifier = ('cursor' | 'node' | ProductRatingEdgeKeySpecifier)[];
export type ProductRatingEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductRatingsSummaryKeySpecifier = ('averageRating' | 'totalRatings' | ProductRatingsSummaryKeySpecifier)[];
export type ProductRatingsSummaryFieldPolicy = {
	averageRating?: FieldPolicy<any> | FieldReadFunction<any>,
	totalRatings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductUpdatePayloadKeySpecifier = ('product' | 'userErrors' | ProductUpdatePayloadKeySpecifier)[];
export type ProductUpdatePayloadFieldPolicy = {
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('me' | 'node' | 'nodes' | 'product' | 'productRating' | 'productRatingComment' | 'productRatingComments' | 'productRatings' | 'products' | 'user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productRating?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatingComment?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatingComments?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimestampsKeySpecifier = ('createdAt' | 'updatedAt' | TimestampsKeySpecifier)[];
export type TimestampsFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'height' | 'id' | 'productRatingComments' | 'productRatings' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatingComments?: FieldPolicy<any> | FieldReadFunction<any>,
	productRatings?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'pageInfo' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserCreatePayloadKeySpecifier = ('user' | 'userErrors' | UserCreatePayloadKeySpecifier)[];
export type UserCreatePayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserErrorKeySpecifier = ('field' | 'message' | UserErrorKeySpecifier)[];
export type UserErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserUpdatePayloadKeySpecifier = ('user' | 'userErrors' | UserUpdatePayloadKeySpecifier)[];
export type UserUpdatePayloadFieldPolicy = {
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotableKeySpecifier = ('userVote' | 'votesSummary' | VotableKeySpecifier)[];
export type VotableFieldPolicy = {
	userVote?: FieldPolicy<any> | FieldReadFunction<any>,
	votesSummary?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteKeySpecifier = ('createdAt' | 'id' | 'type' | 'updatedAt' | 'user' | VoteKeySpecifier)[];
export type VoteFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotesSummaryKeySpecifier = ('countAbusive' | 'countDown' | 'countUp' | 'score' | VotesSummaryKeySpecifier)[];
export type VotesSummaryFieldPolicy = {
	countAbusive?: FieldPolicy<any> | FieldReadFunction<any>,
	countDown?: FieldPolicy<any> | FieldReadFunction<any>,
	countUp?: FieldPolicy<any> | FieldReadFunction<any>,
	score?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionKeySpecifier | (() => undefined | ConnectionKeySpecifier),
		fields?: ConnectionFieldPolicy,
	},
	Contribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionKeySpecifier | (() => undefined | ContributionKeySpecifier),
		fields?: ContributionFieldPolicy,
	},
	DisplayableError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DisplayableErrorKeySpecifier | (() => undefined | DisplayableErrorKeySpecifier),
		fields?: DisplayableErrorFieldPolicy,
	},
	Edge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EdgeKeySpecifier | (() => undefined | EdgeKeySpecifier),
		fields?: EdgeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductConnectionKeySpecifier | (() => undefined | ProductConnectionKeySpecifier),
		fields?: ProductConnectionFieldPolicy,
	},
	ProductCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductCreatePayloadKeySpecifier | (() => undefined | ProductCreatePayloadKeySpecifier),
		fields?: ProductCreatePayloadFieldPolicy,
	},
	ProductEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductEdgeKeySpecifier | (() => undefined | ProductEdgeKeySpecifier),
		fields?: ProductEdgeFieldPolicy,
	},
	ProductRating?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingKeySpecifier | (() => undefined | ProductRatingKeySpecifier),
		fields?: ProductRatingFieldPolicy,
	},
	ProductRatingComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingCommentKeySpecifier | (() => undefined | ProductRatingCommentKeySpecifier),
		fields?: ProductRatingCommentFieldPolicy,
	},
	ProductRatingCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingCommentConnectionKeySpecifier | (() => undefined | ProductRatingCommentConnectionKeySpecifier),
		fields?: ProductRatingCommentConnectionFieldPolicy,
	},
	ProductRatingCommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingCommentEdgeKeySpecifier | (() => undefined | ProductRatingCommentEdgeKeySpecifier),
		fields?: ProductRatingCommentEdgeFieldPolicy,
	},
	ProductRatingConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingConnectionKeySpecifier | (() => undefined | ProductRatingConnectionKeySpecifier),
		fields?: ProductRatingConnectionFieldPolicy,
	},
	ProductRatingEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingEdgeKeySpecifier | (() => undefined | ProductRatingEdgeKeySpecifier),
		fields?: ProductRatingEdgeFieldPolicy,
	},
	ProductRatingsSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductRatingsSummaryKeySpecifier | (() => undefined | ProductRatingsSummaryKeySpecifier),
		fields?: ProductRatingsSummaryFieldPolicy,
	},
	ProductUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductUpdatePayloadKeySpecifier | (() => undefined | ProductUpdatePayloadKeySpecifier),
		fields?: ProductUpdatePayloadFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Timestamps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimestampsKeySpecifier | (() => undefined | TimestampsKeySpecifier),
		fields?: TimestampsFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserCreatePayloadKeySpecifier | (() => undefined | UserCreatePayloadKeySpecifier),
		fields?: UserCreatePayloadFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserErrorKeySpecifier | (() => undefined | UserErrorKeySpecifier),
		fields?: UserErrorFieldPolicy,
	},
	UserUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserUpdatePayloadKeySpecifier | (() => undefined | UserUpdatePayloadKeySpecifier),
		fields?: UserUpdatePayloadFieldPolicy,
	},
	Votable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotableKeySpecifier | (() => undefined | VotableKeySpecifier),
		fields?: VotableFieldPolicy,
	},
	Vote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		fields?: VoteFieldPolicy,
	},
	VotesSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotesSummaryKeySpecifier | (() => undefined | VotesSummaryKeySpecifier),
		fields?: VotesSummaryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;