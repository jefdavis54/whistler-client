import { gql } from "apollo-boost";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
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

export default CREATE_USER_MUTATION;
