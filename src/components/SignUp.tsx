import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import CREATE_USER_MUTATION from "../graphql/Mutation/createUser";
import ErrorMessage from "./ErrorMessage";
import flattenGrapghql from "../util/flattenGraphql";
import login from "../util/login";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Mutation mutation={CREATE_USER_MUTATION} variables={formData}>
      {(createUser: any, { loading, error }: any) => {
        return (
          <StyledForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const response = await createUser(formData);
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
            <h2>Sign up for an account:</h2>
            <ErrorMessage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name (How you would like to be known to by users of this website.)
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your first name, full name, handle, email, etc..."
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email..."
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
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

export default SignUp;
