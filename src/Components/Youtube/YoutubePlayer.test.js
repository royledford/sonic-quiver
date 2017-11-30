import React from 'react'

import YoutubePlayer from './YoutubePlayer'
import renderer from 'react-test-renderer'

it('YoutubePlayer renders', () => {
  const props = {
    videoId: 'abcd',
    title: 'player',
    onBackgroundClick: () => {},
  }

  const tree = renderer.create(<YoutubePlayer {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
