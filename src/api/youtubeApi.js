import axios from 'axios'

const userid = 'UCn7F1oi1b5ErU1vfoxG5oyw'
const apiKey = 'AIzaSyAdJSRPEFVVWJUVbrUnpVEbjdRiYhe_j8g'

const youtubeService = {
  // Below is the youtube api call to get all the videos for a channel
  // 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId={channelId}&maxResults=25&key={apiKey}'
  getVideos: function() {
    const apiCall =
      'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=' +
      userid +
      '&maxResults=25&key=' +
      apiKey

    return axios
      .get(apiCall)
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },

  getVideo: function(id) {
    return axios
      .get(process.env.REACT_APP_BASE_URL + '/invests/' + id)
      .then(function(response) {
        return response.data
      })
      .catch(function(error) {
        console.log(error)
      })
  },
}

export default youtubeService
