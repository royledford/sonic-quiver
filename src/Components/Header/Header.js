import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from '../../common/Logo'
import SidebarMenu from './SidebarMenu'
import './Header.css'
import menuicon from '../../img/menu-icon.svg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Logo width={110} fill="#fff" />
          <img className="header-menu-icon" src={menuicon} />
        </header>
        <SidebarMenu />
      </div>
    )
  }
}
