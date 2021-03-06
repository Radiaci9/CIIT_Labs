import React from 'react'
import LabelWithIcon from './LabelWithIcon'
import PropTypes from 'prop-types'

export default class UserInfo extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const { user } = this.props    
    return (
      user.login
        ? (
          <div>
            <img src={user.avatar} style={{width: '250px', height: '250px', borderRadius: '15px'}} alt='avatar'/>
            <h2 className='nullMargin' name='name'>{user.name}</h2>
            <p className='nullMargin' name='login'>{user.login}</p>
            <p style={{width: '250px'}} name='bio'>{user.bio}</p>
            <hr style={{width: '250px', marginLeft: 0}}/>
            <LabelWithIcon iconSrc='../img/organization.svg' label={user.company} link={false}/>
            <LabelWithIcon iconSrc='../img/location.svg' label={user.location} link={false}/>
            <LabelWithIcon iconSrc='../img/send.svg' label={user.email} link={true}/>
            <LabelWithIcon iconSrc='../img/link.svg' label={user.blog} link={true}/>
          </div>
        ) : (
          <img style={{margin: '0 auto', display: 'block'}} src='../images/Ajax-loader.gif' alt='loading'/>
        )
    )
  }
}