import React, { Component } from 'react'
import Header from '../Header/Header'
import './LibraryPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="library-wrap">
        <Header />
        <div className="library-content">
          <div className="library-list">
            <p>list</p>
          </div>
          <div className="library-detail">
            <p>detail</p>
          </div>
        </div>
      </div>    )
  }
}
