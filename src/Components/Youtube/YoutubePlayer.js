import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '../common/CloseIcon'
import './YoutubePlayer.css'

export default class YoutTubePlay extends Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // title for iframe player
    onBackgroundClick: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    autoplay: PropTypes.number,
    controls: PropTypes.number,
    end: PropTypes.number,
    fs: PropTypes.number,
    loop: PropTypes.number,
    modestbranding: PropTypes.number,
    playsinline: PropTypes.number,
    rel: PropTypes.number,
    showinfo: PropTypes.number,
    start: PropTypes.number,
  }

  static defaultProps = {
    show: false,
    autoplay: 0, // 0 no, 1 is yes
    controls: 1, // 0 hide controls, 1 show controls
    end: 0, // seconds from the start to when the player should stop playing
    fs: 1, // (full screen icon) = 0 don't show, 1 show
    loop: 0, // 0 no loop, 1 loop
    modestbranding: 1, // 0 off, 1 on
    playsinline: 0, // For IOS, 0 plays fullscreen, 1 plays inline
    rel: 0, // 0 no related videos, 1 related videos at end of playing
    showinfo: 1, // 0 do not show info, 1 show info
    start: 0, // start location in seconds
  }

  render() {
    const {
      videoId,
      title,
      onBackgroundClick,
      autoplay,
      show,
      controls,
      end,
      fs,
      loop,
      modestbranding,
      playsinline,
      rel,
      showinfo,
      start,
    } = this.props

    // handle end = 0 case
    let ytEnd = ''
    end === 0 ? (ytEnd = '') : (ytEnd = '&end=' + end)

    const videoSrc =
      'https://www.Youtube.com/embed/' +
      videoId +
      '?autoplay=' +
      autoplay +
      '&controls=' +
      controls +
      ytEnd +
      '&fs=' +
      fs +
      '&loop=' +
      loop +
      '&modestbranding=' +
      modestbranding +
      '&playsinline=' +
      playsinline +
      '&rel=' +
      rel +
      '&showinfo=' +
      showinfo +
      '&start=' +
      start

    if (show === false) return null

    return (
      <div className="youtubelist-video">
        <CloseIcon className="youtubelist-closeicon" size={30} color="rgba(255, 255, 255, 1)" label="Close" />
        <div className="youtubelist-bg" onClick={onBackgroundClick} />
        <div className="youtubelist-videoWrapper youtubelist-centered">
          <iframe
            title={title}
            className="player"
            type="text/html"
            width="100%"
            height="100%"
            src={videoSrc}
            frameBorder="0"
            allowFullScreen="allowFullScreen"
          />
        </div>
      </div>
    )
  }
}
