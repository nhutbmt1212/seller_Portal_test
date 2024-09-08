import gql from 'graphql-tag';

export const GET_ALL_COURT_TYPE = gql`
    query GetAllCourtType($options: CourtTypeListOptions) {
        getAllCourtType(options: $options) {
            items {
                id
                name
                slug
                description
                enabled
                createdAt
                updatedAt
            }
            totalItems
        }
    }
`;

export const DELETE_COURT_TYPE = gql`
    mutation DeleteCourtTypes($ids: [ID!]!) {
        deleteCourtTypes(ids: $ids) {
            result
            message
        }
    }
`;