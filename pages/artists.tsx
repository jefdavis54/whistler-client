import Artist from "../components/Artist";
import Artists from "../components/Artists";

export default (props: any) => {
  if (props.query && typeof props.query.id === "string" && props.query.id.length > 0) {
    return <Artist {...props} />;
  }
  return <Artists {...props} />;
};
