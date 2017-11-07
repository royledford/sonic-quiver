import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './YouTubeSmall.css'

export default class YouTybeSmall extends Component {
  static propTypes = {
      onClick: PropTypes.func,
      someProp: PropTypes.string,
   }
   static defaultProps = {
      someProp: 'someValue',
    }

   constructor (props) {
     super(props)
     this.state = {
       someState: true,
      }
   }


  render () {
    return (
       <h1>value</h1>
    )
  }
}

