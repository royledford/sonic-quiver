import React from 'react'

import YoutubeSmall from './YoutubeSmall'
import renderer from 'react-test-renderer'

it('YoutubeSmall renders', () => {
  const props = {
    id: 'test',
    title: 'test',
    description: 'description',
    thumbnailUrl: 'a/url',
  }
  const tree = renderer.create(<YoutubeSmall {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
