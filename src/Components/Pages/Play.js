import React, { Component } from 'react'
import NaviLink from '../Header/NaviLink'
import AgentSmall from '../Agents/AgentSmall'
import AgentList from '../Agents/AgentList'
import AgentDetail from '../Agents/AgentDetail'
import YoutubeSmall from '../Youtube/YoutubeSmall'
import YoutubeList from '../Youtube/YoutubeList'
import CloseIcon from '../common/CloseIcon'

export default class Play extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: 'relative',
            height: 100,
            backgroundColor: 'olive',
            padding: '10px 0 0 10px',
            borderBottom: '1px solid white',
          }}
        >
          <CloseIcon size={30} label="Close" lineWidth={10} color={'#fff'} />
        </div>
        <div
          style={{
            position: 'relative',
            height: 600,
            backgroundColor: 'olive',
            padding: '10px 0 0 150px',
            borderBottom: '1px solid white',
          }}
        >
          <YoutubeSmall
            id="tzn-QhoE1RI"
            title="Sonic Quiver - INNOCENT MISCHIEF"
            description="Quirky orchestral comedy. Music by Michael Sims (PRS). Listen to full album at www.sonicquiver.com."
            thumbnailUrl="https://i.ytimg.com/vi/Lvlmo-H2yi4/hqdefault.jpg"
          />
        </div>
        <div
          style={{
            position: 'relative',
            height: 800,
            backgroundColor: 'olive',
            padding: '10px 0 0 150px',
            borderBottom: '1px solid white',
          }}
        >
          <YoutubeList />
        </div>
        <div
          style={{
            position: 'relative',
            height: 600,
            backgroundColor: 'olive',
            padding: '10px 0 0 150px',
            borderBottom: '1px solid white',
          }}
        >
          <AgentDetail />
        </div>
        <div
          style={{
            position: 'relative',
            height: 400,
            backgroundColor: 'olive',
            padding: '75px 0 0 150px',
            borderBottom: '1px solid white',
          }}
        >
          <AgentList />
        </div>
        <div
          style={{
            height: 300,
            backgroundColor: 'olive',
            padding: '75px 0 0 150px',
          }}
        >
          <AgentSmall location="USA" companyName="Five Alarm" agentName="Cassie Lourdes" />
        </div>
        <div
          style={{
            position: 'flex',
            justifyContent: 'space-evenly',
            height: 300,
            backgroundColor: '#E6B380',
            padding: '75px 0 0 150px',
          }}
        >
          <NaviLink
            to="/"
            id="test"
            linkText="Test"
            largeText="Test"
            description="This is a description of where the link will take you."
          />
          <NaviLink
            to="/"
            id="Library"
            linkText="Library"
            largeText="Library"
            description="Listen to the Sonic Quiver Library"
          />
        </div>
      </div>
    )
  }
}
