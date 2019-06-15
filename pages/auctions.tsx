import Auction from "../components/Auction";
import Auctions from "../components/Auctions";

export default (props: any) => {
  if (props.query && typeof props.query.id === "string" && props.query.id.length > 0) {
    return <Auction {...props} />;
  }
  return <Auctions {...props} />;
};
