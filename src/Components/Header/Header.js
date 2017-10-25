import React, { Component } from 'react'
import Logo from '../common/Logo'
import SidebarMenu from './SidebarMenu'
import './Header.css'
import menuIcon from '../../img/menu-icon.svg'

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
    const { navVisible } = this.state

    return (
      <div>
        <header className="header">
          <div className="header-logo">
            <Logo width={110} fill="#fff" />
          </div>
          <div className="header-icon-wrap" onClick={this.toggleNav}>
            <img className="header-menu-icon" src={menuIcon} alt="Menu" />
          </div>
        </header>
        <SidebarMenu navVisible={navVisible} closeNav={this.toggleNav} />
      </div>
    )
  }
}
