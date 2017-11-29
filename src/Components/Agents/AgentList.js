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
          country={agent.shortCountry}
          companyName={agent.name}
          agentName={agent.agentName}
          address1={agent.address1}
          address2={agent.address2}
          address3={agent.address3}
          phone={agent.phone}
          fax={agent.fax}
          email={agent.email}
          urlDisplay={agent.urlDisplay}
          sonicUrl={agent.sonicUrl}
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
