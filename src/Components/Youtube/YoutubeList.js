import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YoutubeService from '../../api/youtubeApi'
import YoutubeSmall from './YoutubeSmall'
import YoutubeSmallLoader from './YoutubeSmallLoader'
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
      loading: true,
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
    const { videoToPlay, videoTitle, showVideo, ytVids, loading } = this.state
    let ytList = []
    if (loading) {
      ytList = [1, 2, 3].map((_, i) => <YoutubeSmallLoader key={i} />)
    } else {
      ytList = ytVids.map(
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
      )
    }

    return (
      <div className="youtubelist-wrap">
        {/* <YoutubeSmallLoader id="loader" /> */}
        <div className="youtubelist-row">
          <div className="youtubelist-list">{ytList}</div>
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
