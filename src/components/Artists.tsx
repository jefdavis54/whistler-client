import { Query } from "react-apollo";
import StyledCenter from "../styles/Center";
import StyledItemsList from "../styles/ListItems";
import ALL_ARTISTS_QUERY from "../graphql/Query/artists";
import { Artist } from "../lib/typsescriptInterfaces";
import Card from "./ArtistCard";

const Artists = () => (
  <StyledCenter>
    <p>All Artists</p>
    <Query query={ALL_ARTISTS_QUERY}>
      {({ data, error, loading }: any) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        const artists: Artist[] = data.artists && data.artists.data ? data.artists.data : [];
        // zJED TODO: Need to implement error block for prismaResponse
        // const prismaErrors = data.artworks && data.artworks.errors ? data.artworks.errors : []
        return (
          <StyledItemsList>
            {artists.map(artist => (
              <Card key={artist.id} artist={artist} />
            ))}
          </StyledItemsList>
        );
      }}
    </Query>
  </StyledCenter>
);

export default Artists;
