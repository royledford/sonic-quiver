import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AgentDetail.css'

export default class AgentDetail extends Component {
  static PropTypes = {
    country: PropTypes.string,
    name: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    address3: PropTypes.string,
    agentName: PropTypes.string,
    phone: PropTypes.string,
    fax: PropTypes.string,
    email: PropTypes.string,
    urlDisplay: PropTypes.string,
    sonicUrl: PropTypes.string,
  }
  static defaultProps = {
    country: '',
    name: '',
    address1: '',
    address2: '',
    address3: '',
    agentName: '',
    phone: '',
    fax: '',
    email: '',
    urlDisplay: '',
    sonicUrl: '',
  }

  render() {
    const { country, name, address1, address2, address3, agentName, phone, fax, email, urlDisplay, sonicUrl } = this.props

    return (
      <div className="agentdetail-wrap">
        <div className="agentdetail-country">{country}</div>
        <hr className="agentdetail-rule" />
        <div className="agentdetail-company">{name}</div>
        <div className="agentdetail-address">
          {address1}
          <br />
          {address2}
          <br />
          {address3}
          <br />
        </div>
        <div className="agentdetail-agent">
          {agentName}
          <br />
          TEL: {phone}
          <br />
          FAX: {fax}
          <br />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="agentdetail-url">
          <a href={sonicUrl} target="_blank" rel="noopener noreferrer">
            {urlDisplay}
          </a>
        </div>
      </div>
    )
  }
}
