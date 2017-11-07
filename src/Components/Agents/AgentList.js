import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AgentSmall from './AgentSmall'
import './AgentList.css'

export default class AgentList extends Component {
  static PropTypes = {
    data: PropTypes.array.isRequired,
  }
  static defaultProps = {
    data: [],
  }
  render() {
    const { data } = this.props
    const listItems = data.map(agent => {
      return (
        <AgentSmall
          key={agent.id}
          id={agent.id}
          location={agent.shortCountry}
          companyName={agent.name}
          agentName={agent.agentName}
          onMouseEnter={this.props.onMouseEnter}
        />
      )
    })
    return (
      <div className="agentlist">
        <ul>{listItems}</ul>
      </div>
    )
  }
}
