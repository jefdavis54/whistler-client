import Link from "next/link";
import StyledNav from "../styles/Nav";
import logout from "../util/logout";

const LoggedIn = ({ name }: any) => (
  <StyledNav>
    {name && <p>{`Hello, ${name}`}</p>}
    <Link href="/items">
      <a>Gallery</a>
    </Link>
    <Link href="/artworks">
      <a>Artworks</a>
    </Link>
    <Link href="/artists">
      <a>Artists</a>
    </Link>
    <Link href="/locations">
      <a>Locations</a>
    </Link>
    <Link href="/posts">
      <a>Posts</a>
    </Link>
    <Link href="/addlocation">
      <a>Add</a>
    </Link>
    <Link href="/account">
      <a>Account</a>
    </Link>
    <button type="button" onClick={logout}>
      Signout
    </button>
    <Link href="/about">
      <a>About</a>
    </Link>
  </StyledNav>
);
const LoggedOut = () => (
  <StyledNav>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/signin">
      <a>Signin</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </StyledNav>
);

const Nav = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (typeof token === "string" && token.length > 0) {
      if (typeof name === "string" && name.length > 0) {
        return <LoggedIn name={name} />;
      }
      return <LoggedIn />;
    }
    return <LoggedOut />;
  }
  return {};
};

export default Nav;
