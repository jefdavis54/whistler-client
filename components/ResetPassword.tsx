import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import RESET_PASSWORD_MUTATION from "../graphql/Mutation/resetPassword";
import ErrorMessage from "./ErrorMessage";
import ErrorMessageNetwork from "./ErrorMessageNetwork";
import flattenGrapghql from "../util/flattenGraphql";
import login from "../util/login";
import isEmail from "isemail";
import validatePassword from "../shared/validatePassword";

const ResetPassword = (props: any) => {
  const initialFormData = {
    email: "",
    resetToken: "",
    password: "",
    password2: "",
  };
  const initialFormErrors: string[] = [];
  const valid =
    props.query &&
    typeof props.query.resetToken === "string" &&
    typeof props.query.email === "string" &&
    props.query.resetToken.trim().length > 0 &&
    props.query.email.trim().length > 0 &&
    isEmail.validate(props.query.email.trim());
  if (valid) {
    initialFormData.email = props.query.email;
    initialFormData.resetToken = props.query.resetToken;
  } else {
    initialFormErrors.push(
      "Invalid reset password web address provided. Please use the link from the reset token email.",
    );
  }
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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
              const signUpErrors = validatePassword(formData.password);
              if (formData.password !== formData.password2) {
                signUpErrors.push("Password and 'Confirm password' must match");
              }
              if (signUpErrors.length > 0) {
                setFormErrors(signUpErrors);
                return;
              }
              const response = await resetPassword(formData);
              // zJED TODO: Check response.errors in addition to the flatten below
              const { errors, data, token } = flattenGrapghql(response, "createUser");
              if (errors.length === 0) {
                setFormData(initialFormData);
                login(data, token, "/");
              } else {
                console.log("ERROR:SignUp:: errors", errors);
              }
            }}
          >
            <h2>Reset password:</h2>
            <ErrorMessage errorMsgArr={formErrors} title={"Reset Password"} />
            <ErrorMessageNetwork error={error} />
            <fieldset disabled={loading || !valid} aria-busy={loading}>
              <label htmlFor="password">
                Password (At least 8 characters with upper and lowercase letters)
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
              <label htmlFor="password2">
                Confirm password
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm password..."
                  required
                  value={formData.password2}
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

export default ResetPassword;
