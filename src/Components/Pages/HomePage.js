import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import './HomePage.css'

export default class HomePage extends Component {
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
       <div className="homepage-wrap">
         <Header />
         <h1>This is an h1</h1>
         </div>
    )
  }
}

