interface User {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  name?: string;
  name_lcase?: string;
  email?: string;
  email_lcase?: string;
  emailValidated?: boolean;
  active?: boolean;
  posts?: [Post];
  comments?: [Comment];
  artistRecords?: [Artist];
  artworkRecords?: [Artwork];
  artworkLocationRecords?: [ArtworkLocation];
  auctionArtworkSeller?: [AuctionArtwork];
  auctionArtworkBuyer?: [AuctionArtwork];
  auctionArtworkWatcher?: [AuctionArtwork];
  auctionArtworkBid?: [AuctionArtworkBid];
  password?: string;
  resetToken?: string;
  resetTokenExpiry?: string;
  permissions?: [string];
  [key: string]: any;
}
interface Post {
  id?: string;
  easyId?: string;
  easyId_lcase?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  owner?: User;
  title?: string;
  title_lcase?: string;
  body?: string;
  body_lcase?: string;
  isPublished?: boolean;
  comments?: [Comment];
  [key: string]: any;
}
interface Comment {
  id?: string;
  easyId?: string;
  easyId_lcase?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  owner?: User;
  post?: Post;
  text?: string;
  text_lcase?: string;
  isPublished?: boolean;
  [key: string]: any;
}
interface Artist {
  id?: string;
  easyId?: string;
  easyId_lcase?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  owner?: User;
  isPublished?: boolean;
  wikiPage?: string;
  wikiPhoto?: string;
  imageLink?: string;
  birthName?: string;
  commonName?: string;
  dateOfBirth?: string;
  dateOfBirthAccuracy?: string;
  dateOfDeath?: string;
  dateOfDeathAccuracy?: string;
  nationality?: string;
  knownFor?: string;
  movements?: string;
  gender?: string;
  artworks?: [Artwork];
  artworkLocations?: [ArtworkLocation];
  deceased?: boolean;
  birthCountry?: string;
  birthLocation?: string;
  birthLocationDetails?: string;
  deathCountry?: string;
  deathLocation?: string;
  deathLocationDetails?: string;
  imageMaxName?: string;
  imageMaxWidth?: number;
  imageMaxHeight?: number;
  imageOptName?: string;
  imageOptWidth?: number;
  imageOptHeight?: number;
  imageThmName?: string;
  imageThmWidth?: number;
  imageThmHeight?: number;
  [key: string]: any;
}
interface ArtworkLocation {
  id?: string;
  easyId?: string;
  easyId_lcase?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  owner?: User;
  isPublished?: boolean;
  wikiPage?: string;
  wikiPhoto?: string;
  imageLink?: string;
  name?: string;
  nickname?: string;
  description?: string;
  dateFirstOpened?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  coorE?: number;
  coorN?: number;
  website?: string;
  isMuseum?: boolean;
  imageMaxName?: string;
  imageMaxWidth?: number;
  imageMaxHeight?: number;
  imageOptName?: string;
  imageOptWidth?: number;
  imageOptHeight?: number;
  imageThmName?: string;
  imageThmWidth?: number;
  imageThmHeight?: number;
  artworks?: [Artwork];
  artists?: [Artist];
  [key: string]: any;
}
interface Artwork {
  id?: string;
  easyId?: string;
  easyId_lcase?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  owner?: User;
  isPublished?: boolean;
  wikiPage?: string;
  wikiPhoto?: string;
  imageLink?: string;
  artist?: Artist;
  notableWork?: boolean;
  artworkLocation?: ArtworkLocation;
  artworkLocationURL?: string;
  fileName?: string;
  workName?: string;
  workName_english?: string;
  workName_ascii?: string;
  dateCompleted?: string;
  dateCompletedAccuracy?: string;
  type?: string;
  genre?: string;
  medium?: string;
  mediumSupport?: string;
  description?: string;
  descriptionSource?: string;
  accession?: string;
  creditLine?: string;
  dimensionCoreW_mm?: number;
  dimensionCoreH_mm?: number;
  dimensionCoreD_mm?: number;
  dimensionCoreWHD_in?: string;
  dimensionFramedW_mm?: number;
  dimensionFramedH_mm?: number;
  dimensionFramedD_mm?: number;
  dimensionFramedWHD_in?: string;
  signature?: string;
  onviewAt?: string;
  otherDescription?: string;
  imageMaxName?: string;
  imageMaxWidth?: number;
  imageMaxHeight?: number;
  imageOptName?: string;
  imageOptWidth?: number;
  imageOptHeight?: number;
  imageThmName?: string;
  imageThmWidth?: number;
  imageThmHeight?: number;
  auctions?: [AuctionArtwork];
  [key: string]: any;
}
interface AuctionArtwork {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  isPublished?: boolean;
  startDate?: string;
  endDate?: string;
  withdrawnDate?: string;
  saleDate?: string;
  refundDate?: string;
  reserve?: number;
  initialPrice?: number;
  buyoutPrice?: number;
  salePrice?: number;
  artwork?: Artwork;
  seller?: User;
  buyer?: User;
  bids?: [AuctionArtworkBid];
  watchers?: [User];
  [key: string]: any;
}

interface AuctionArtworkBid {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  auction?: AuctionArtwork;
  bidder?: User;
  amount?: number;
  [key: string]: any;
}

interface ErrorObj {
  error: {
    message: string;
    networkError: {
      result: {
        errors: [Error];
      };
    };
  };
}

interface Error {
  message: string;
}

interface DefaultApolloClientState {
  token: string | undefined;
  name: string | undefined;
  email: string | undefined;
}

export {
  Artwork,
  ArtworkLocation,
  Artist,
  ErrorObj,
  Error,
  User,
  Post,
  Comment,
  AuctionArtwork,
  AuctionArtworkBid,
  DefaultApolloClientState,
};
