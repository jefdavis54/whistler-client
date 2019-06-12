import Link from 'next/link'
import StyledNav from '../styles/Nav'

const Nav = () => (
  <StyledNav>
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
    <Link href="/signup">
      <a>Signup / in</a>
    </Link>
  </StyledNav>
)

export default Nav