import Link from "next/link";
import { Artwork } from "../lib/typsescriptInterfaces";
import StyledCard from "../styles/CardArtwork";

interface Props {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: Props) => {
  const imageLink = "./static/images/" + artwork.imageThmName;
  const artworkEasyIdSTR = typeof artwork.easyId === "string" ? artwork.easyId.toLowerCase() : "";
  const artworkLink = { pathname: "/artwork", query: { easyId: artworkEasyIdSTR } };
  const artistEasyIdSTR =
    artwork.artist && typeof artwork.artist.easyId === "string"
      ? artwork.artist.easyId.toLowerCase()
      : "";
  const artistLink = {
    pathname: "/artist",
    query: { easyId: artistEasyIdSTR },
  };
  const locationEasyIdSTR =
    artwork.artworkLocation && typeof artwork.artworkLocation.easyId === "string"
      ? artwork.artworkLocation.easyId.toLowerCase()
      : "";
  const locationLink = {
    pathname: "/location",
    query: { easyId: locationEasyIdSTR },
  };
  return (
    <StyledCard>
      <img
        src={imageLink}
        height={artwork.imageThmHeight}
        width={artwork.imageThmWidth}
        alt={artwork.workName_english}
      />
      <Link href={artworkLink}>
        <a className="artwork">{artwork.workName_english}</a>
      </Link>
      <Link href={artistLink}>
        <a className="artist">{artwork.artist && artwork.artist.commonName}</a>
      </Link>
      <Link href={locationLink}>
        <a className="location">{artwork.artworkLocation && artwork.artworkLocation.name}</a>
      </Link>
    </StyledCard>
  );
};

export default ArtworkCard;
