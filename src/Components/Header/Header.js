import React, { Component } from 'react'
import Logo from '../../common/Logo'
import SidebarMenu from './SidebarMenu'
import './Header.css'
import menuIcon from '../../img/menu-icon.svg'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navHidden: true,
    }
  }

  toggleNav = () => {
    this.setState({ navHidden: !this.state.navHidden })
  }

  render() {
    return (
      <div>
        <header className="header">
          <Logo width={110} fill="#fff" />
          <img
            className="header-menu-icon"
            src={menuIcon}
            onClick={this.toggleNav}
            alt="Menu"
          />
        </header>
        <SidebarMenu showNav={this.state.navHidden} closeNav={this.toggleNav}/>
      </div>
    )
  }
}
