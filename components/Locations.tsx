import { Query } from "react-apollo";
import StyledCenter from "../styles/Center";
import StyledItemsList from "../styles/ListItems";
import ALL_LOCATIONS_QUERY from "../graphql/Query/locations";
import { ArtworkLocation } from "../lib/typsescriptInterfaces";
import Card from "./LocationCard";

const Locations = () => (
  <StyledCenter>
    <p>All Locations</p>
    <Query query={ALL_LOCATIONS_QUERY}>
      {({ data, error, loading }: any) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        const locations: ArtworkLocation[] =
          data.artworkLocations && data.artworkLocations.data ? data.artworkLocations.data : [];
        // zJED TODO: Need to implement error block for prismaResponse
        // const prismaErrors = data.artworks && data.artworks.errors ? data.artworks.errors : []
        return (
          <StyledItemsList>
            {locations.map(location => (
              <Card key={location.id} location={location} />
            ))}
          </StyledItemsList>
        );
      }}
    </Query>
  </StyledCenter>
);

export default Locations;
