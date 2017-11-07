import React, { Component } from 'react'
import Header from '../Header/Header'
import YouTubeList from '../YouTube/YouTubeList'
import './RecentsPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="recents-wrap">
        <Header />
        <div className="recents-spacer" />

        <div className="recents-content">
          <YouTubeList />
        </div>
      </div>
    )
  }
}
