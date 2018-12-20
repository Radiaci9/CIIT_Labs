import React from 'react'
import PropTypes from 'prop-types'

export default class LabelWithIcon extends React.Component {
  
static propTypes = {
  iconSrc: PropTypes.string.isRequired,
  link: PropTypes.bool.isRequired
}
  render() {
    const { iconSrc, label, link } = this.props
    return (
      <div style={{display: 'flex', marginTop: '5px'}}>
          <img src={iconSrc} alt=""/>
          {
            !link
            ? <p name="pLink" style={{margin: '0 0 0 10px'}}>{label ? label : 'none'}</p>
            : <a name="aLink" style={{margin: '0 0 0 10px'}} href={label ? label : '#'}>{label ? label : 'none'}</a>
          }
      </div>
    )
  }
}

