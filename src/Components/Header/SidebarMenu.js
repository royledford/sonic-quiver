import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SidebarMenu.css'

export default class SidebarMenu extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    someProp: PropTypes.string,
  }
  static defaultProps = {
    someProp: 'someValue',
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    return (
      <nav className="sidebarmenu">
        <ul className="sidebarmenu-list">
          <li className="sidebarmenu-item">
            <a href="/library" className="sidebarmenu-link">Library</a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/recents" className="sidebarmenu-link">Recent Work</a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/worldwide" className="sidebarmenu-link">Worldwide</a>
          </li>
          <li className="sidebarmenu-item">
            <a href="/about" className="sidebarmenu-link">About</a>
          </li>
        </ul>
      </nav>
    )
  }
}
