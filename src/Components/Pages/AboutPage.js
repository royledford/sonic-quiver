import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaInstagram from 'react-icons/lib/fa/instagram'

import './AboutPage.css'

export default class AboutPage extends Component {
  render() {
    return (
      <div className="aboutpage-wrap">
        <Header />
        <div className="aboutpage-topspacer" />
        <div className="aboutpage-row">
          <div className="aboutpage-text">
            <p>
              Sonic Quiver is an American production music library based out of sunny Florida, USA. Founded in 2007 by
              Shana Lazarus, the library celebrates its 10th anniversary and 100th release in 2017. Over the last
              decade, the international team of producers and composers have been having a blast creating one of the
              most useful and vibrant production music libraries of its time.
            </p>
            <p>
              Sonic Quiver has become known for its inspired, youthful energy, spanning a broad spectrum of genres, with
              cues specifically tailored for broadcast and film. Sonic Quiver offers a robust collection of trend-driven
              content from commercial producers, covering genres like indie, rock, punk, country and blues. The label
              also features sophisticated orchestral compositions for drama and film, including crime, thriller, epic,
              romance and action.
            </p>
            <p>
              Sonic Quiver boasts a strong American identity with albums like ‘West Coast, Best Coast’; ‘Country Trash’;
              ‘Deep Fried South’; ‘Bluegrass and Blues’ and ‘Aloha!’ and is your go-to library for those quirky,
              cheerful indie cues (‘Reasons to Smile’; ‘Sunshine Indie’ and the ‘Instant Happiness’ series), and their
              attitude to Rock ’n’ Roll is quite simple: “Go big or go home”
            </p>
          </div>
          <div className="aboutpage-contact">
            <p>
              <b>Phone:</b>&nbsp;&nbsp;(954) 426-1141
            </p>
            <p>
              <b>Email:</b>&nbsp;&nbsp;<a href="mailto:sonicquiver.com">sonicquiver.com</a>
            </p>
          </div>
          <div className="aboutpage-social">
            <a
              href="https://www.facebook.com/Sonic-Quiver-Music-34519582815/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="aboutpage-icon" />
            </a>
            <a href="https://twitter.com/sonicquiver/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="aboutpage-icon" />
            </a>
            <a href="https://www.instagram.com/sonicquiver" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="aboutpage-icon" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
