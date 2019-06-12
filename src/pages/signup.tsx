import styled from "styled-components";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import ResetPassword from "../components/ResetPassword";

const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  margin: 10rem;
`;
export default () => (
  <ThreeColumns>
    <SignUp />
    <SignIn />
    <ResetPassword />
  </ThreeColumns>
);
