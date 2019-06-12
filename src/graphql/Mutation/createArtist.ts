import { gql } from "apollo-boost";

const CREATE_ARTIST_MUTATION = gql`
  mutation CREATE_ARTIST_MUTATION(
    $easyId: String!
    $isPublished: Boolean
    $wikiPage: String
    $commonName: String
  ) {
    createArtist(
      easyId: $easyId
      isPublished: $isPublished
      wikiPage: $wikiPage
      commonName: $commonName
    ) {
      errors
      data {
        id
      }
    }
  }
`;

export default CREATE_ARTIST_MUTATION;
