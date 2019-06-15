import Header from "./Header";
import Meta from "./Meta";
import StyledPage from "../styles/Page";

const Page = ({ children }: any) => (
  <StyledPage>
    <Meta />
    <Header />
    {children}
  </StyledPage>
);

export default Page;
