import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import renderer from 'react-test-renderer'

it('Header renders', () => {
  const tree = renderer
    .create(
      <Router>
        <Header />
      </Router>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
