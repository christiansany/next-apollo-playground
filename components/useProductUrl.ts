import { DocumentType, gql } from "__generated__/gql";

const useProductUrl_Product = gql(`
  fragment useProductUrl_Product on Product {
    id
  }
`);

export const useProductUrl = (
  product: DocumentType<typeof useProductUrl_Product>
) => `/product/${encodeURIComponent(product.id)}`;
