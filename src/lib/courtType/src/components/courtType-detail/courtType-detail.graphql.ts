import gql from "graphql-tag";

export const CREATE_COURT_TYPE = gql`
  mutation CreateCourtType($input: CreateCourtType!) {
    createCourtType(input: $input) {
      id
    }
  }
`;

export const UPDATE_COURT_TYPE = gql`
  mutation UpdateCourtType($input: UpdateCourtType!) {
    updateCourtType(input: $input) {
      id
    }
  }
`;
export const GET_COURT_TYPE = gql(`
    query GetCourtType($id: ID!) {
        getCourtType(id: $id) {
            id
            createdAt
            updatedAt
            name
            slug
            enabled
            description
        }
    }
`);
