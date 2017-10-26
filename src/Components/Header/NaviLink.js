import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import './NaviLink.css'

export default class NaviLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    largeText: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  static defaultProps = {
    someProp: 'someValue',
  }

  render() {
    const { to, id, linkText, largeText, description } = this.props
    return (
      <div className="navilink-wrap">
        <Link to={to} id={id} className="navilink-link">
          {linkText}
        </Link>
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
