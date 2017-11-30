import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NaviLink from './NaviLink'
import renderer from 'react-test-renderer'

it('renders', () => {
  const tree = renderer
    .create(
      <Router>
        <NaviLink
          to="http:\\www.royledford.com"
          id="ElementId"
          linkText="Test Link"
          largeText="Big Text"
          description="test description"
        />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
