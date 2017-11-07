import React, { Component } from 'react'
import PropTypes from 'prop-types'
import youtubeService from '../../api/youtubeApi'
import YouTubeSmall from './YouTubeSmall'
import './YouTubeList.css'

export default class YouTubeList extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    someProp: PropTypes.string,
  }
  static defaultProps = {
    someProp: 'someValue',
  }

  constructor(props) {
    super(props)
    this.state = {
      ytVids: [],
      loading: false,
    }

    // youtubeService.getVideos()
    // .then(latestInvests => {
    //   this.setState({
    //     latestInvests: latestInvests.invests,
    //     dataLoadFinished: true,
    //   })
    // })
  }

  componentWillMount() {
    this.setState({ loading: true })
    youtubeService.getVideos().then(vids => {
      this.setState({ ytVids: vids.items, loading: false })
      console.log(this.state.ytVids)
    })
  }

  componentDidMount = () => {
    console.log(this.state.ytVids)
  }

  render() {
    return (
      <div className="youtubelist-wrap">
        {this.state.ytVids.map(
          vid =>
            vid.id.videoId ? (
              <YouTubeSmall
                key={vid.id.videoId}
                id={vid.id.videoId}
                title={vid.snippet.title}
                description={vid.snippet.description}
                thumbnailUrl={vid.snippet.thumbnails.high.url}
              />
            ) : null
        )}
      </div>
    )
  }
}
