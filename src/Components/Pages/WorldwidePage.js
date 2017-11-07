import React, { Component } from 'react'
import Header from '../Header/Header'
import AgentList from '../Agents/AgentList'
import AgentDetail from '../Agents/AgentDetail'
import AgentApi from '../../api/agentsApi'
import './WorldwidePage.css'

export default class WorldwidePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAgent: 0,
      agentList: [],
      currentAgent: {},
    }
  }

  componentWillMount() {
    const agents = AgentApi.getAgents()
    this.setState({
      agentList: agents,
      currentAgent: agents[0],
    })
  }

  handleAgentHover = (id) => {
    let agent = this.state.agentList.filter(agent => agent.id === id)
    if (agent.length > 0) agent = agent[0]
    this.setState({currentAgent: agent})
  }

  render() {
    const { agentList, currentAgent } = this.state
    return (
      <div className="worldwidepage-wrap">
        <Header />
        <div className="worldwidepage-spacer">
          </div>
          <div className="worldwidpage-row">
            <AgentList data={agentList} onMouseEnter={this.handleAgentHover.bind(this)} />
            <AgentDetail
              country={currentAgent.shortCountry}
              name={currentAgent.name}
              address1={currentAgent.address1}
              address2={currentAgent.address2}
              address3={currentAgent.address3}
              agentName={currentAgent.agentName}
              phone={currentAgent.phone}
              fax={currentAgent.fax}
              email={currentAgent.email}
              url={currentAgent.url}
              urlDisplay={currentAgent.urlDisplay}
              sonicUrl={currentAgent.sonicUrl}
            />
          </div>
      </div>
    )
  }
}
