import React, { Component } from 'react'
import Eq from '../../Components/Eq/Eq'
import NaviLink from '../Header/NaviLink'

export default class Play extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: "flex",
            justifyContent: "space-evenly",
            height: 300,
            backgroundColor: '#E6B380',
            padding: "75px 0 0 150px"
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
        <div>
          <Eq width={400} height={100} />
        </div>
      </div>
    )
  }
}
