import { agentData } from './agents'
import { sortBy } from 'lodash'

class AgentApi {
  static getAgents = () => {
    return sortBy(agentData, 'sortString')
  }
}

export default AgentApi
