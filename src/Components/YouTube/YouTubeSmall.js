import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import './YouTubeSmall.css'

export default class YouTubeSmall extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      someState: true,
    }
  }

  render() {
    const { id, title, description, thumbnailUrl } = this.props
    return (
      <div className="youtubesmall-wrap" key={id}>
        <div className="youtubesmall-text">
          <h4 className="youtubesmall-title">{title}</h4>
          <p className="youtubesmall-description">{description}</p>
        </div>
        <div className="youtubesmall-vid-wrap">
          <img className="youtubesmall-img" src={thumbnailUrl} alt={title} />
          <FaPlayCircle className="youtubesmall-play" />
        </div>
      </div>
    )
  }
}
