import React, { Component } from 'react'
import Header from '../Header/Header'
import YoutubeList from '../Youtube/YoutubeList'
import './RecentsPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="recents-wrap">
        <Header />
        <div className="recents-spacer" />

        <div className="recents-content">
          <YoutubeList />
        </div>
      </div>
    )
  }
}
