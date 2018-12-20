import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import PropTypes from 'prop-types'

export default class NavBar extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }
  createNavBarItem = (label, click, i) =>
    <Button size='lg' key={'button' + i} name={'button' + i} color='primary' style={{marginRight: '20px'}}
        onClick={e => click()}>{label}</Button>
  render() {
    return (
        <Row className='col-sm-11' style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col>
                {
                  this.props.items.map((el, i) => this.createNavBarItem(el.label, el.click, i))
                }
            </Col>
        </Row>
      )
    }
  }