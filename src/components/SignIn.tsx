import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import LOGIN_USER_MUTATION from "../graphql/Mutation/loginUser";
import ErrorMessage from "./ErrorMessage";
import flattenGrapghql from "../util/flattenGraphql";
import login from "../util/login";

const initialFormData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Mutation mutation={LOGIN_USER_MUTATION} variables={formData}>
      {(loginUser: any, { loading, error }: any) => {
        return (
          <StyledForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const response = await loginUser(formData);
              // zJED TODO: Check response.errors in addition to the flatten below
              const { errors, data, token } = flattenGrapghql(response, "loginUser");
              if (errors.length === 0) {
                setFormData(initialFormData);
                login(data, token, "/");
              } else {
                console.log("ERROR:SignIn:: errors", errors);
              }
            }}
          >
            <h2>Sign in to account:</h2>
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email..."
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password..."
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </fieldset>
          </StyledForm>
        );
      }}
    </Mutation>
  );
};

export default SignIn;
