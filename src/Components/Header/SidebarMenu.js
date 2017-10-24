import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SidebarMenu.css'
import closeIcon from '../../img/close-menu-icon.svg'

export default class SidebarMenu extends Component {
  static propTypes = {
    closeMenu: PropTypes.func,
  }


  toggleNav = () => {
    this.props.closeNav()
  }

  render() {
    return (
      <nav
        className={
          'sidebarmenu ' + (this.props.showNav ? ' sidebarmenu-hidden' : '')
        }
      >
      <div className="sidebarmenu-close-wrap" onClick={this.toggleNav}>
        <img
          className="sidebarmenu-icon"
          src={closeIcon}
          onClick={this.toggleNav}
          alt="Menu"
        />
        </div>
        <ul className="sidebarmenu-list">
          <li className="sidebarmenu-item">
            <a href="/library" className="sidebarmenu-link">
              Library
            </a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/recents" className="sidebarmenu-link">
              Recent Work
            </a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/worldwide" className="sidebarmenu-link">
              Worldwide
            </a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/about" className="sidebarmenu-link">
              About
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
