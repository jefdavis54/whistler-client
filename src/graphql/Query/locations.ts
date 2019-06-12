import { gql } from 'apollo-boost'

const ALL_LOCATIONS_QUERY = gql`
  query ALL_LOCATIONS_QUERY {
    artworkLocations {
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
        name
        city
        state
        country
      }
    }
  }
`

export default ALL_LOCATIONS_QUERY