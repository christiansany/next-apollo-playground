import Link from "next/link";
import { FunctionComponent } from "react";
import { DocumentType, gql } from "__generated__/gql";
import { useProductUrl } from "./useProductUrl";

const ProductLink_Product = gql(`
  fragment ProductLink_Product on Product {
    name
    ...useProductUrl_Product
  }
`);

interface ProductLinkProps {
  product: DocumentType<typeof ProductLink_Product>;
}

export const ProductLink: FunctionComponent<ProductLinkProps> = ({
  product,
}) => {
  const productUrl = useProductUrl(product);
  return (
    <Link href={productUrl}>
      <a>{product.name}</a>
    </Link>
  );
};
