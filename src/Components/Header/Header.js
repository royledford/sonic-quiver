import React, { Component } from 'react'
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
    }
  }

  toggleNav = () => {
    this.setState({ navVisible: !this.state.navVisible })
  }

  render() {
    // const { navVisible } = this.state

    return (
      <div>
        <header className="header">
          <div className="header-logo">
            <Logo width={162} fill="#fff" />
          </div>
          <nav className="header-nav">
            <NaviLink
              to="/library"
              id="library"
              linkText="Library"
              largeText="Library"
              description="View the Sonic Quiver music library"
            />

            <NaviLink
              to="/worldwide"
              id="library"
              linkText="Worldwide"
              largeText="Worldwide"
              description="Contact a Sonic Quiver agent in your country"
            />
            <NaviLink
              to="/recents"
              id="recents"
              linkText="Recent Work"
              largeText="Recent"
              description="See examples of our music in action"
            />
            <NaviLink
              to="/about"
              id="about"
              linkText="About"
              largeText="About"
              description="Learn more about Sonic Quiver"
            />
          </nav>
        </header>
      </div>
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
