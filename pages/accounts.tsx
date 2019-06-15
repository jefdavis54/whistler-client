import Account from "../components/Account";
import Accounts from "../components/Accounts";

export default (props: any) => {
  if (props.query && typeof props.query.id === "string" && props.query.id.length > 0) {
    return <Account {...props} />;
  }
  return <Accounts {...props} />;
};
