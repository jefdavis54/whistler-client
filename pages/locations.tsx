import Location from "../components/Location";
import Locations from "../components/Locations";

export default (props: any) => {
  if (props.query && typeof props.query.id === "string" && props.query.id.length > 0) {
    return <Location {...props} />;
  }
  return <Locations {...props} />;
};
