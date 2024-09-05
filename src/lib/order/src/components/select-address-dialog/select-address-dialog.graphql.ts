import { ADDRESS_FRAGMENT } from "@vendure/admin-ui/core";
import { gql } from "apollo-angular";

export const GET_CUSTOMER_ADDRESSES = gql`
  query GetCustomerAddresses($customerId: ID!) {
    customer(id: $customerId) {
      id
      addresses {
        ...Address
      }
    }
  }
  fragment Address on Address {
    id
    createdAt
    updatedAt
    fullName
    company
    streetLine1
    streetLine2
    city
    province
    postalCode
    country {
      id
      code
      name
    }
    phoneNumber
    defaultShippingAddress
    defaultBillingAddress
  }
`;
