import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import YoutubeList from './YoutubeList'
import renderer from 'react-test-renderer'

it('renders', () => {
  const tree = renderer.create(<YoutubeList />).toJSON()
  expect(tree).toMatchSnapshot()
})
