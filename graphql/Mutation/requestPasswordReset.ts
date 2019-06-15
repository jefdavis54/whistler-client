import { gql } from "apollo-boost";

const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation REQUEST_PASSWORD_RESET_MUTATION($email: String!) {
    resetPassword(email: $email) {
      errors
      data
    }
  }
`;

export default REQUEST_PASSWORD_RESET_MUTATION;
