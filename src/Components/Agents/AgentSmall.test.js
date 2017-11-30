import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AgentSmall from './AgentSmall'
import renderer from 'react-test-renderer'

it('AgentSmall renders', () => {
  const tree = renderer
    .create(
      <AgentSmall
        country="country name"
        companyName="company"
        agentName="agent name"
        address1="address 1"
        address2="address 1"
        address3="address 1"
        phone="phone"
        fax="fax"
        email="email"
        urlDisplay="url display"
        sonicUrl="sonic url"
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
