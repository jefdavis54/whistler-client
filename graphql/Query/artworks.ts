import { gql } from 'apollo-boost'

const ALL_ARTWORKS_QUERY = gql`
  query ALL_ARTWORKS_QUERY {
    artworks {
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
        workName_english
        fileName
        artist {
          easyId
          commonName
        }
        artworkLocation {
          easyId
          name
        }
      }
    }
  }
`

export default ALL_ARTWORKS_QUERY