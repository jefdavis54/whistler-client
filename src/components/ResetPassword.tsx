import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import RESET_PASSWORD_MUTATION from "../graphql/Mutation/resetPassword";
import ErrorMessage from "./ErrorMessage";
import Router from "next/router";
import flattenGrapghql from "../util/flattenGraphql";

const initialFormData = {
  email: "",
};

const SignIn = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Mutation mutation={RESET_PASSWORD_MUTATION} variables={formData}>
      {(resetPassword: any, { loading, error }: any) => {
        return (
          <StyledForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const response = await resetPassword(formData);
              // zJED TODO: Check response.errors in addition to the flatten below
              const { errors } = flattenGrapghql(response, "resetPassword");
              if (errors.length === 0) {
                //zJED TODO PROD: Remove console.logs
                setFormData(initialFormData);
              } else {
                console.log("SignUp.tsx errors", errors);
              }
            }}
          >
            <h2>Reset password for account:</h2>
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="email">
                Email for account:
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email for account..."
                  required
                  value={formData.email}
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
