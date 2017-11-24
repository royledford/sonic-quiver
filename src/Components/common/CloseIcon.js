import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CloseIcon extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.number,
    lineWidth: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
  }
  static defaultProps = {
    size: 16,
    lineWidth: 6,
    color: '#000',
    className: '',
  }

  render() {
    const { size, label, lineWidth, color, className } = this.props
    return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 39 39" aria-labelledby={label}>
          <title>{label}</title>
          <g>
            <line strokeWidth={lineWidth} stroke={color} x1="3" y1="36" x2="36" y2="3" />
            <line strokeWidth={lineWidth} stroke={color} x1="36" y1="36" x2="3" y2="3" />
          </g>
        </svg>
      </div>
    )
  }
}
