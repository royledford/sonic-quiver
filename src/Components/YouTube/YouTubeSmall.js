import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import './YoutubeSmall.css'

export default class YoutubeSmall extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.playVideo = this.playVideo.bind(this)
  }

  playVideo = () => {
    this.props.playVideo(this.props.id, this.props.title)
  }

  render() {
    const { id, title, description, thumbnailUrl } = this.props
    return (
      <div className="youtubesmall-wrap" key={id}>
        <div className="youtubesmall-text">
          <h4 className="youtubesmall-title">{title}</h4>
          <p className="youtubesmall-description">{description}</p>
        </div>
        <div className="youtubesmall-vid-wrap" onClick={this.playVideo}>
          <div className="youtubesmall-vid" style={{ backgroundImage: `url("${thumbnailUrl}")` }} />
          <div className="youtubesmall-cover" />
          <FaPlayCircle className="youtubesmall-play" />
        </div>
      </div>
    )
  }
}
