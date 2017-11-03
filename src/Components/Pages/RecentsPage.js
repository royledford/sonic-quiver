import React, { Component } from 'react'
import Header from '../Header/Header'
import './RecentsPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="recents-wrap">
        <Header />
        <div className="recents-content">
          <div className="recents-list">
            <p>list</p>
          </div>
        </div>
      </div>
    )
  }
}
