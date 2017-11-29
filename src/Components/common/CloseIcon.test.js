import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import CloseIcon from './CloseIcon'
import renderer from 'react-test-renderer'

describe('Close Icon', () => {
  it('renders', () => {
    const tree = renderer.create(<CloseIcon label="test" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('uses custom props', () => {
    const tree = renderer
      .create(<CloseIcon label="test label" size={16} lineWidth={6} color="#555" className="classname" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
