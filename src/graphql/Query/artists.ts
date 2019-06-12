import { gql } from 'apollo-boost'

const ALL_ARTISTS_QUERY = gql`
  query ALL_ARTISTS_QUERY {
    artists {
      errors 
      data {
        id
        easyId
        isPublished
        imageOptName
        imageOptWidth
        imageOptHeight
        imageThmName
        imageThmWidth
        imageThmHeight
        commonName
        dateOfBirth
        dateOfDeath
        deceased
        nationality
        movements
      }
    }
  }
`

export default ALL_ARTISTS_QUERY