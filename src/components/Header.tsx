import Link from 'next/link'
import Nav from './Nav'
import Router from 'next/router'
import StyledLogo from '../styles/Logo'
import StyledHeader from '../styles/Header'
import NProgress from '../static/nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <StyledLogo>
        <Link href="/">
          <a>Whistler Auctions</a>
        </Link>
      </StyledLogo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
)

export default Header