import React, { Component } from 'react'
import AgentSmall from './AgentSmall'
import './AgentList.css'

export default class AgentList extends Component {
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
