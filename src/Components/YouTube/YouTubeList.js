import React, { Component } from 'react'
import PropTypes from 'prop-types'
import youtubeService from '../../api/youtubeApi'
import './YouTubeSmall.css'

export default class YouTubeSmall extends Component {
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
    youtubeService.getVideos().then(vids => {
      this.setState({ ytVids: vids.items })
    })
  }

  componentDidMount = () => {}

  render() {
    return (
      <div>
        {this.state.ytVids.map(vid =>
        <div key={vid.id.videoId}>
          <h4>{vid.snippet.title}</h4>
          <p>{vid.snippet.description}</p>
          <img src={vid.snippet.thumbnails.default.url} />
        </div>
        )}
      </div>
    )
  }
}
