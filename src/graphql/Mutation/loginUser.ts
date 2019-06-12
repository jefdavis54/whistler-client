import { gql } from "apollo-boost";

const LOGIN_USER_MUTATION = gql`
  mutation LOGIN_USER_MUTATION($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      errors
      token
      data {
        id
        easyId
        email
        name
      }
    }
  }
`;

export default LOGIN_USER_MUTATION;
