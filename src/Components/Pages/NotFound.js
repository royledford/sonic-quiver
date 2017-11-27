import React, { Component } from 'react'
import Header from '../Header/Header'

import './NotFound.css'

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound-wrap">
        <Header />
        <div className="notfound-content">
          <h1 className="notfound-title">Well, this is awkward!</h1>
          <p className="notfound-copy">
            We can't seem to find what you are looking for. Try one of the links above.
            <br />
            <br />
            Error: 404 Not Found.
          </p>
        </div>
      </div>
    )
  }
}
