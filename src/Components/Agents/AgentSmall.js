import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AgentSmall.css'

export default class AgentSmall extends Component {
  static propTypes = {
    location: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    agentName: PropTypes.string.isRequired,
  }

  handleHover = () => {
    this.props.onMouseEnter(this.props.id)
  }

  render() {
    const { location, companyName, agentName } = this.props
    return (
      <div className="agentsmall-wrap" onMouseEnter={this.handleHover}>
        <h4 className="agentsmall-location">{location}</h4>
        <hr className="agentsmall-rule" />
        <p className="agentsmall-company">
          {companyName} - {agentName}
        </p>
      </div>
    )
  }
}
