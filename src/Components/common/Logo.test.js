import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Logo from './Logo'
import renderer from 'react-test-renderer'

describe('SQ Logo', () => {
  it('renders', () => {
    const tree = renderer.create(<Logo width={200} fill="#000" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('uses defaults', () => {
    const tree = renderer.create(<Logo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
