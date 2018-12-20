import React from "react"
import { connect } from "react-redux"
import history from "../history"
import { Row, Col, Button } from "reactstrap"
import { getUserFollowers, getUserRepositories } from "../actions/userAction"
import loader from '../img/Ajax-loader.gif'

class AnotherPage extends React.Component {
  constructor(props){
    super(props)
    this.props.fetchUserFollowers('gaearon')
    this.props.fetchUserRepositories('gaearon')
  }

  customListItem = (id, login) => (
    <ul className="list=group mb-3" key={id}>
      <li className="list-group-item">ID: {id}</li>
      <li className="list-group-item">Login: {login}</li>
    </ul>
  )
  render() {
    const { user } = this.props
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col sm={{size: 12}}>
                <Button className="float-right" size="lg" color="primary"
                    onClick={e => history.push("/")}>Home Page</Button>
            </Col>
            <Col sm={{size: 6}}>
                <h2>Followers:</h2>
                {user.followers.length !== 0
                  ? user.followers.map(el => this.customListItem(el.id, el.login))
                  : <img style={{margin: "0 auto", display: "block"}} src={loader} alt="loading"/>
                }
            </Col>
            <Col sm={{size: 6}}>
                <h2>Repositories:</h2>
                {user.repositories.length !== 0
                  ? user.repositories.map(el => this.customListItem(el.id, el.full_name))
                  : <img style={{margin: "0 auto", display: "block"}} src={loader} alt="loading"/>
                }
            </Col>
        </Row>
      )
    }
  }

const mapStateToProps = state => ({
  user: state.userInfo
})

const mapDispatchToProps = dispatch => ({
  fetchUserFollowers: user => dispatch(getUserFollowers(user)),
  fetchUserRepositories: user => dispatch(getUserRepositories(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnotherPage)
