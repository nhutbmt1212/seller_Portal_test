import { gql } from "apollo-angular";

export const GET_PRODUCT_VARIANTS_FOR_MULTI_SELECTOR = gql`
  fragment Asset on Asset {
    id
    createdAt
    updatedAt
    name
    fileSize
    mimeType
    type
    preview
    source
    width
    height
    focalPoint {
      x
      y
    }
  }
  query GetProductVariantsForMultiSelector(
    $options: ProductVariantListOptions!
  ) {
    productVariants(options: $options) {
      items {
        id
        createdAt
        updatedAt
        productId
        enabled
        languageCode
        name
        price
        currencyCode
        priceWithTax
        trackInventory
        outOfStockThreshold
        stockLevels {
          id
          createdAt
          updatedAt
          stockLocationId
          stockOnHand
          stockAllocated
          stockLocation {
            id
            createdAt
            updatedAt
            name
          }
        }
        useGlobalOutOfStockThreshold
        sku
        featuredAsset {
          ...Asset
        }
      }
      totalItems
    }
  }
`;
