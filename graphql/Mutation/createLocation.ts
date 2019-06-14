import { gql } from "apollo-boost";

const CREATE_LOCATION_MUTATION = gql`
  mutation CREATE_LOCATION_MUTATION(
    $easyId_lcase: String!
    $isPublished: Boolean
    $wikiPage: String
    $wikiPhoto: String
    $imageLink: String
    $name: String
    $nickname: String
    $description: String
    $dateFirstOpened: String
    $streetAddress: String
    $city: String
    $state: String
    $postalCode: String
    $country: String
    $coorE: Int
    $coorN: Int
    $website: String
    $isMuseum: Boolean
  ) {
    createArtworkLocation(
      data: {
        easyId_lcase: $easyId
        isPublished: $isPublished
        wikiPage: $wikiPage
        wikiPhoto: $wikiPhoto
        imageLink: $imageLink
        name: $name
        nickname: $nickname
        description: $description
        dateFirstOpened: $dateFirstOpened
        streetAddress: $streetAddress
        city: $city
        state: $state
        postalCode: $postalCode
        country: $country
        coorE: $coorE
        coorN: $coorN
        website: $website
        isMuseum: $isMuseum
      }
    ) {
      errors
      data {
        id
      }
    }
  }
`;

export default CREATE_LOCATION_MUTATION;
