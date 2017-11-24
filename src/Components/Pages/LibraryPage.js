import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './LibraryPage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div className="library-wrap">
        <Header />
        <div className="library-spacer" />
        <div className="library-row">
          <div className="library-list">
            <p className="library-copy">For USA access to our entire library please visit:</p>
            <a
              href="http://live.harvestmedia.net/player.aspx?acctid=6e615bb799aa8ef3"
              className="library-headline"
              target="_blank"
              rel="noopener noreferrer"
            >
              listen.sonicquiver.com
            </a>
            <p className="library-copy">
              Visit our&nbsp;
              <Link to="/worldwide" className="library-link">
                worldwide
              </Link>
              &nbsp;page for a listing of agents in your local area.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
