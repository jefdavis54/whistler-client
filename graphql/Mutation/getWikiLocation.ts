import { gql } from "apollo-boost";

const GET_WIKI_MUTATION = gql`
  mutation GET_WIKI_MUTATION($url: String!) {
    getWikiLocation(url: $url) {
      errors
      data {
        easyId
        wikiPage
      }
    }
  }
`;

export default GET_WIKI_MUTATION;
