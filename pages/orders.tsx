import Order from "../components/Order";
import Orders from "../components/Orders";

export default (props: any) => {
  if (props.query && typeof props.query.id === "string" && props.query.id.length > 0) {
    return <Order {...props} />;
  }
  return <Orders {...props} />;
};
