import { Query } from "react-apollo";
import StyledCenter from "../styles/Center";
import StyledItemsList from "../styles/ListItems";
import ALL_ARTWORKS_QUERY from "../graphql/Query/artworks";
import { Artwork } from "../lib/typsescriptInterfaces";
import Card from "./ArtworkCard";

// zJED TODO: Currently auctions just displays all artworks.
const Auctions = () => (
  <StyledCenter>
    <p>All Artworks</p>
    <Query query={ALL_ARTWORKS_QUERY}>
      {({ data, error, loading }: any) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        const artworks: Artwork[] = data.artworks && data.artworks.data ? data.artworks.data : [];
        // zJED TODO: Need to implement error block for prismaResponse
        // const prismaErrors = data.artworks && data.artworks.errors ? data.artworks.errors : []
        return (
          <StyledItemsList>
            {artworks.map(artwork => (
              <Card key={artwork.id} artwork={artwork} />
            ))}
          </StyledItemsList>
        );
      }}
    </Query>
  </StyledCenter>
);

export default Auctions;
