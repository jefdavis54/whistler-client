import { gql } from "apollo-boost";

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION($email: String!) {
    resetPassword(email: $email) {
      errors
    }
  }
`;

export default RESET_PASSWORD_MUTATION;
