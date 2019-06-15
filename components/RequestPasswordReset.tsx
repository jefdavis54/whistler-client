import { Mutation } from "react-apollo";
import REQUEST_PASSWORD_RESET_MUTATION from "../graphql/Mutation/requestPasswordReset";

type Props = {
  email: string;
};

const RequestPasswordReset = ({ email }: Props) => {
  <div>
    <button
      type="button"
      onClick={() => {
        console.log("FE:RequestPasswordReset::", email);
      }}
    >
      Reset Password
    </button>
  </div>;
};

export default RequestPasswordReset;
