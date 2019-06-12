import { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { Query } from "react-apollo";
import ALL_ARTWORKS_QUERY from "../graphql/Query/artworks";
import { Artwork } from "../lib/typsescriptInterfaces";
import StyledGallery from "../styles/Gallery";

const ArtworksGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (e: any, obj: any) => {
    setCurrentImage(obj.index);
    setLightboxIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  return (
    <Query query={ALL_ARTWORKS_QUERY}>
      {({ data, error, loading }: any) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        const artworks: Artwork[] = data.artworks && data.artworks.data ? data.artworks.data : [];
        // zJED TODO: Need to implement error block for prismaResponse
        // const prismaErrors = data.artworks && data.artworks.errors ? data.artworks.errors : []
        const photosForGallery = artworks.map(artwork => ({
          src: "./static/images/" + artwork.imageThmName,
          width: artwork.imageThmWidth ? artwork.imageThmWidth : 0,
          height: artwork.imageThmHeight ? artwork.imageThmHeight : 0,
        }));
        const photosForLightbox = artworks.map(artwork => ({
          src: "./static/images/" + artwork.imageOptName,
          caption: artwork.workName_english,
        }));
        return (
          <StyledGallery>
            <Gallery photos={photosForGallery} onClick={openLightbox} />
            <Lightbox
              images={photosForLightbox}
              backdropClosesModal={true}
              onClose={closeLightbox}
              onClickPrev={() => setCurrentImage(currentImage - 1)}
              onClickNext={() => setCurrentImage(currentImage + 1)}
              currentImage={currentImage}
              isOpen={lightboxIsOpen}
              width={1600}
            />
          </StyledGallery>
        );
      }}
    </Query>
  );
};

export default ArtworksGallery;
