import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import PropTypes from 'prop-types'
import './NaviLink.css'

export default class NaviLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    largeText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    activeClassName: PropTypes.string,
  }
  static defaultProps = {
    activeClassName: '',
  }

  render() {
    const { to, id, linkText, largeText, description, activeClassName } = this.props
    return (
      <div className="navilink-wrap">
        <NavLink to={to} id={id} className="navilink-link" activeClassName={activeClassName}>
          {linkText}
        </NavLink>
        <div id={`{id}-largeText`} className="navilink-largeText">
          {largeText}
        </div>
        <div id={`{id}-description`} className="navilink-description">
          {description}
        </div>
      </div>
    )
  }
}
