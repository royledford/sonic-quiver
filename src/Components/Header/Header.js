import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'
import NaviLink from './NaviLink'
// import SidebarMenu from './SidebarMenu'
import './Header.css'
// import menuIcon from '../../img/menu-icon.svg'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navVisible: false,
      activeLink: '',
    }
  }

  toggleNav = () => {
    this.setState({ navVisible: !this.state.navVisible })
  }

  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <Link to="/">
            <Logo width={162} fill="#fff" />
          </Link>
        </div>
        <nav className="header-nav">
          <NaviLink
            to="/library"
            id="library"
            activeClassName="navilink-active"
            linkText="Library"
            largeText="Library"
            description="View the Sonic Quiver music library"
          />

          <NaviLink
            to="/worldwide"
            id="library"
            activeClassName="navilink-active"
            linkText="Worldwide"
            largeText="Worldwide"
            description="Contact a Sonic Quiver agent in your country"
          />
          <NaviLink
            to="/recents"
            id="recents"
            activeClassName="navilink-active"
            linkText="Recent Work"
            largeText="Recent"
            description="See examples of our music in action"
          />
          <NaviLink
            to="/about"
            id="about"
            activeClassName="navilink-active"
            linkText="About"
            largeText="About"
            description="Learn more about Sonic Quiver"
          />
        </nav>
      </header>
    )
  }
}

// {/* <div className="header-icon-wrap" onClick={this.toggleNav}>
//             <img className="header-menu-icon" src={menuIcon} alt="Menu" />
//           </div>
//         <SidebarMenu navVisible={navVisible} closeNav={this.toggleNav} /> */}

// {/* <div >
//               <img
//                 className="sidebarmenu-icon"
//                 src={closeIcon}
//                 onClick={this.toggleNav}
//                 alt="Menu"
//               />
//             </div> */}
