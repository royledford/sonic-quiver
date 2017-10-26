import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import MdClear from 'react-icons/lib/md/clear'
import './AboutPage.css'

export default class EmailPage extends Component {
  render() {
    return (
      <div className="aboutpage-wrap">
        <Header />
        <div className="aboutpage-topspacer" />
        <div className="aboutpage-row">
          <div className="aboutpage-text">

          </div>
          <div className="aboutpage-social">
            <Link to="/about">
              <MdClear className="aboutpage-icon" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
