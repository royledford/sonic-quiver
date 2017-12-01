import React, { Component } from 'react'
import './YoutubeSmallLoader.css'
import loaderImg from '../../img/youtube-loader.jpg'

export default class YoutubeSmallLoader extends Component {
  render() {
    return (
      <div className="youtubesmallloader-wrap">
        <div className="youtubesmallloader-text">
          <h4 className="youtubesmallloader-title">{'Loading...'}</h4>
          <p className="youtubesmallloader-description">{'Loading...'}</p>
        </div>
        <div className="youtubesmallloader-vid-wrap">
          <div className="youtubesmallloader-vid" style={{ backgroundImage: `url(${loaderImg})` }} />
        </div>
      </div>
    )
  }
}
