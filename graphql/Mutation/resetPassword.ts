import { gql } from "apollo-boost";

const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($email: String!, $token: String!, $password: String!) {
    resetPassword(email: $email, token: $token, password: $password) {
      errors
      data {
        name
        email
      }
      token
    }
  }
`;

export default RESET_PASSWORD;
