import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AgentSmall.css'

export default class AgentSmall extends Component {
  static propTypes = {
    country: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    agentName: PropTypes.string.isRequired,
    address1: PropTypes.string,
    address2: PropTypes.string,
    address3: PropTypes.string,
    phone: PropTypes.string,
    fax: PropTypes.string,
    email: PropTypes.string,
    urlDisplay: PropTypes.string,
    sonicUrl: PropTypes.string,
  }

  handleHover = () => {
    this.props.onMouseEnter(this.props.id)
  }

  render() {
    const {
      country,
      companyName,
      agentName,
      email,
      address1,
      address2,
      address3,
      phone,
      fax,
      urlDisplay,
      sonicUrl,
    } = this.props

    const faxDisplay = fax ? `FAX: ${fax}` : ''

    return (
      <div className="agentsmall-wrap" onMouseEnter={this.handleHover}>
        <h4 className="country">{country}</h4>
        <hr className="agentsmall-rule" />
        <p className="agentsmall-copy">
          {companyName} - {agentName}
        </p>
        <div className="agentsmall-mobile">
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <a href={sonicUrl} target="_blank" rel="noopener noreferrer">
            {urlDisplay}
          </a>
          <div className="agentsmall-copy">
            TEL: {phone}
            {fax && <br />}
            {faxDisplay}
          </div>
          <div className="agentsmall-copy">
            {address1}
            <br />
            {address2}
            <br />
            {address3}
            <br />
          </div>
        </div>
      </div>
    )
  }
}
