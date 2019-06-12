import Link from "next/link";
import { ArtworkLocation } from "../lib/typsescriptInterfaces";
import StyledCard from "../styles/CardArtwork";

interface Props {
  location: ArtworkLocation;
}

const LocationCard = ({ location }: Props) => {
  const imageLink = "./static/images/" + location.imageThmName;
  const locationEasyIdSTR =
    typeof location.easyId === "string" ? location.easyId.toLowerCase() : "";
  const locationLink = {
    pathname: "/location",
    query: { easyId: locationEasyIdSTR },
  };
  let address = location.city;
  if (location.state && location.state.length > 0) {
    address += ", " + location.state;
  }
  if (location.country && location.country.length > 0) {
    address += ", " + location.country;
  }
  return (
    <StyledCard>
      <img
        src={imageLink}
        height={location.imageThmHeight}
        width={location.imageThmWidth}
        alt={location.name}
      />
      <Link href={locationLink}>
        <a>{location.name}</a>
      </Link>
      <div>{address}</div>
    </StyledCard>
  );
};

export default LocationCard;
