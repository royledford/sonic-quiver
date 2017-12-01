import React, { Component } from 'react'
import TimelineLite from 'gsap/TimelineLite'
import './MainLoader.css'

export default class MainLoader extends Component {
  render() {
    return (
      <div className="mainloader">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 308.2">
          <title>Sonic-Logo-boards-to-ani</title>

          <g id="svgLogo">
            <g id="brds" fill="#fff">
              <path
                id="brd3"
                className="mainloader-animate mainloader-animate-3"
                ref={path => {
                  this.brd3 = path
                }}
                d="M162.05,307.53l-3.18-7c-13-28.54-34.21-87.82-30.79-164.15,2-43.5,12.69-87.23,31.91-130l3.19-7.1,3.19,7.1c13,28.93,29.05,75.16,31.56,131.09,2.48,55.28-8.52,110.13-32.7,163Zm1.13-290.92c-16.85,39.59-26.3,80-28.1,120.1-3.09,68.93,14.31,123.65,27,153.72,21.48-49.64,31.18-100.94,28.87-152.59C188.69,87.49,175.25,45.16,163.18,16.61Z"
                transform="translate(0 0.67)"
              />
              <path
                id="brd2"
                className="mainloader-animate mainloader-animate-2"
                ref={path => {
                  this.brd2 = path
                }}
                d="M98.55,307.53l-3.18-7c-13-28.54-34.21-87.82-30.79-164.15,2-43.5,12.69-87.23,31.91-130l3.19-7.1,3.19,7.1c13,28.93,29.05,75.16,31.56,131.09,2.48,55.28-8.52,110.13-32.7,163ZM99.68,16.61c-16.85,39.59-26.3,80-28.1,120.1-3.09,68.93,14.31,123.65,27,153.72,21.48-49.64,31.18-100.94,28.87-152.59C125.19,87.49,111.75,45.16,99.68,16.61Z"
                transform="translate(0 0.67)"
              />
              <path
                id="brd1"
                className="mainloader-animate mainloader-animate-1"
                ref={path => {
                  this.brd1 = path
                }}
                d="M35.05,307.53l-3.18-7C18.91,272-2.34,212.72,1.09,136.39,3,92.89,13.78,49.16,33,6.43l3.19-7.1,3.19,7.1c13,28.93,29.05,75.16,31.56,131.09,2.48,55.28-8.52,110.13-32.7,163ZM36.18,16.61c-16.85,39.59-26.3,80-28.1,120.1C5,205.63,22.39,260.35,35.09,290.42,56.56,240.78,66.27,189.49,64,137.83,61.69,87.49,48.25,45.16,36.18,16.61Z"
                transform="translate(0 0.67)"
              />
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
