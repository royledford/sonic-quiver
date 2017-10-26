import React, { Component } from 'react'
import Header from '../Header/Header'
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage-wrap">
        <Header />
        <h1 className="homepage-lead">Production Music Library</h1>
      </div>
    )
  }
}
