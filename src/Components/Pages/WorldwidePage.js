import React, { Component } from 'react'
import Header from '../Header/Header'
import './WorldwidePage.css'

export default class WorldwidePage extends Component {
  render() {
    return (
      <div className="worldwidepage-wrap">
        <Header />
        <div className="worldwidepage-content">
          <div className="worldwidepage-list">
            <p>list</p>
          </div>
          <div className="worldwidepage-detail">
            <p>detail</p>
          </div>
        </div>
      </div>
    )
  }
}
