import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AgentList from './AgentList'
import renderer from 'react-test-renderer'

it('AgentSmall renders', () => {
  const tree = renderer
    .create(
      <AgentList
        data={[
          {
            id: 1,
            country: 'United States',
            shortCountry: 'USA',
            sortString: 'AAAA',
            name: '5 Alarm Music',
            address1: '35 West Dayton St.',
            address2: 'Pasadena, CA 91105',
            address3: '',
            agentName: 'Cassie Lord',
            phone: '(626) 304-1698',
            fax: '(626) 795-2058',
            email: 'cassie@5alarmmusic.com',
            url: 'http://5alarmmusic.com/',
            urlDisplay: '5alarmmusic.com',
            sonicUrl: 'http://5alarmmusic.com/music/sonic-quiver/',
          },
        ]}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
