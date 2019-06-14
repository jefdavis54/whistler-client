import Link from "next/link";
import { Artist } from "../lib/typsescriptInterfaces";
import StyledCard from "../styles/CardArtwork";

interface Props {
  artist: Artist;
}

const ArtistCard = ({ artist }: Props) => {
  const imageLink = "./static/images/" + artist.imageThmName;
  const artistEasyIdSTR = typeof artist.easyId === "string" ? artist.easyId.toLowerCase() : "";
  const yearOfBirthSTR =
    typeof artist.dateOfBirth === "string" ? artist.dateOfBirth.slice(1, 5) : "";
  const yearOfDeathSTR =
    typeof artist.dateOfDeath === "string" ? artist.dateOfDeath.slice(1, 5) : "";
  const artistLink = { pathname: "/artist", query: { easyId: artistEasyIdSTR } };
  let lifespan = "(" + yearOfBirthSTR + "-";
  if (artist.deceased) {
    lifespan += yearOfDeathSTR;
  }
  lifespan += ")";
  return (
    <StyledCard>
      <img
        src={imageLink}
        height={artist.imageThmHeight}
        width={artist.imageThmWidth}
        alt={artist.commonName}
      />
      <Link href={artistLink}>
        <a>{artist.commonName}</a>
      </Link>
      <div>{lifespan}</div>
      <div>{artist.nationality}</div>
    </StyledCard>
  );
};

export default ArtistCard;
