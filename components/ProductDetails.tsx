import {
  DocumentNode,
  NoInfer,
  OperationVariables,
  SkipToken,
  SuspenseQueryHookOptions,
  TypedDocumentNode,
  UseSuspenseQueryResult,
  useApolloClient,
  useSuspenseQuery as useApolloSuspenseQuery,
} from "@apollo/client";
import { gql } from "__generated__/gql";
import React, {
  Children,
  FunctionComponent,
  useContext,
  useMemo,
  useRef,
} from "react";
import { DeepPartial } from "@apollo/client/utilities";
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";

interface IProductDetailsProps {
  id: string;
}

declare global {
  interface Window {
    __APOLLO_STATE__: Record<string, object>;
  }
}

export const ProductDetails: FunctionComponent<IProductDetailsProps> = ({
  id,
}) => {
  const { data } = useSuspenseQuery(
    gql(/* GraphQL */ `
      query GetProductDetails($id: ID!) {
        product(id: $id) {
          id
          description
        }
      }
    `),
    {
      variables: {
        id,
      },
    }
  );

  return (
    <>
      <p>{data.product?.description}</p>
    </>
  );
};

// ---------------- APOLLO useSuspenseQuery stub

export function useSuspenseQuery<
  TData,
  TVariables extends OperationVariables,
  TOptions extends Omit<SuspenseQueryHookOptions<TData>, "variables">
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> &
    TOptions
): UseSuspenseQueryResult<
  TOptions["errorPolicy"] extends "ignore" | "all"
    ? TOptions["returnPartialData"] extends true
      ? DeepPartial<TData> | undefined
      : TData | undefined
    : TOptions["returnPartialData"] extends true
    ? TOptions["skip"] extends boolean
      ? DeepPartial<TData> | undefined
      : DeepPartial<TData>
    : TOptions["skip"] extends boolean
    ? TData | undefined
    : TData,
  TVariables
>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
    returnPartialData: true;
    errorPolicy: "ignore" | "all";
  }
): UseSuspenseQueryResult<DeepPartial<TData> | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
    errorPolicy: "ignore" | "all";
  }
): UseSuspenseQueryResult<TData | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
    skip: boolean;
    returnPartialData: true;
  }
): UseSuspenseQueryResult<DeepPartial<TData> | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
    returnPartialData: true;
  }
): UseSuspenseQueryResult<DeepPartial<TData>, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
    skip: boolean;
  }
): UseSuspenseQueryResult<TData | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
): UseSuspenseQueryResult<TData, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options:
    | SkipToken
    | (SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>> & {
        returnPartialData: true;
      })
): UseSuspenseQueryResult<DeepPartial<TData> | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?:
    | SkipToken
    | SuspenseQueryHookOptions<NoInfer<TData>, NoInfer<TVariables>>
): UseSuspenseQueryResult<TData | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options:
    | (SkipToken & Partial<SuspenseQueryHookOptions<TData, TVariables>>)
    | SuspenseQueryHookOptions<TData, TVariables>
): UseSuspenseQueryResult<TData | undefined, TVariables>;

export function useSuspenseQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables
>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options: any = Object.create(null)
) {
  const queryKey = useMemo(() => {
    if ("name" in query.definitions[0]) {
      return `${query.definitions[0].name?.value}:${JSON.stringify(
        options.variables
      )}`.replace(/"/g, "");
    }
    throw new Error("Operation unnamed");
  }, [query, options.variables]);

  const client = useApolloClient();
  const headManagerContext = useContext(HeadManagerContext);
  const hasWrittenToHead = useRef(false);

  useMemo(() => {
    if (typeof window === "undefined") {
      return;
    }
    const data = (window.__APOLLO_STATE__?.[queryKey] as TData) || {};
    delete window.__APOLLO_STATE__?.[queryKey];

    client.writeQuery<TData, TVariables>({
      query,
      data: data as TData,
      variables: options?.variables,
    });
  }, []);

  const result = useApolloSuspenseQuery<TData, TVariables>(query, options);

  if (!hasWrittenToHead.current && !options.skip) {
    const hydrationElement = (
      <script
        data-apollo-hydration
        dangerouslySetInnerHTML={{
          __html: `
            window.__APOLLO_STATE__ = window.__APOLLO_STATE__ || {};
            window.__APOLLO_STATE__["${queryKey}"] = ${JSON.stringify(
            result.data
          )};
          `,
        }}
      ></script>
    );

    headManagerContext.mountedInstances.add(hydrationElement);
    if (headManagerContext.updateHead) {
      const headElements = Children.toArray(
        Array.from(headManagerContext.mountedInstances as Set<React.ReactNode>)
      ) as React.ReactElement[];
      headManagerContext.updateHead(headElements);
    }

    hasWrittenToHead.current = true;
  }

  return result;
}
