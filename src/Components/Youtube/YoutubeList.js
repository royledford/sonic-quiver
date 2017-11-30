import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YoutubeService from '../../api/youtubeApi'
import YoutubeSmall from './YoutubeSmall'
import YoutubePlayer from './YoutubePlayer'
import './YoutubeList.css'

export default class YoutubeList extends Component {
  static propTypes = {
    onClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      ytVids: [],
      loading: false,
      videoToPlay: '',
      videoTitle: '',
      showVideo: false,
    }
    this.handlePlayClicked = this.handlePlayClicked.bind(this)
  }

  componentWillMount() {
    this.setState({ loading: true })
    YoutubeService.getVideos().then(vids => {
      this.setState({ ytVids: vids.items, loading: false })
    })
  }

  handlePlayClicked(id, title) {
    this.setState({
      videoToPlay: id,
      videoTitle: title,
      showVideo: true,
    })
  }

  handlePlayerClosed = () => {
    this.setState({
      videoToPlay: '',
      showVideo: false,
    })
  }

  render() {
    const { videoToPlay, videoTitle, showVideo, ytVids } = this.state
    return (
      <div className="youtubelist-wrap">
        <div className="youtubelist-row">
          <div className="youtubelist-list">
            {ytVids.map(
              vid =>
                vid.id.videoId ? (
                  <YoutubeSmall
                    key={vid.id.videoId}
                    id={vid.id.videoId}
                    title={vid.snippet.title}
                    description={vid.snippet.description}
                    thumbnailUrl={vid.snippet.thumbnails.high.url}
                    playVideo={this.handlePlayClicked}
                  />
                ) : null
            )}
          </div>
        </div>
        <YoutubePlayer
          videoId={videoToPlay}
          title={videoTitle}
          show={showVideo}
          onBackgroundClick={this.handlePlayerClosed}
          autoplay={1}
        />
      </div>
    )
  }
}
