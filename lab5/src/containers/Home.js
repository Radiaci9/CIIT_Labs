import React from "react"
import { connect } from "react-redux"
import history from "../history"
import UserInfo from "../components/UserInfo"
import UserTabs from "../components/UserTabs"
import { Row, Col, Button } from "reactstrap"
import { getUser, getUserOrgs } from "../actions/userAction"

class Home extends React.Component {
  constructor(props){
    super(props)
    this.props.fetchUser('gaearon')
    this.props.fetchUserOrgs('gaearon')
  }
  render() {
    return (
        <Row className="col-sm-11" style={{display: 'flex', margin: '20px auto 20px auto'}}>
            <Col sm={{size: 12}}>
                <Button className="float-right" size="lg" color="primary"
                    onClick={e => history.push("/anotherPage")}>Page Repositories and Followers</Button>
            </Col>
            <Col sm={{size: 12}} md={{size: 'auto'}} hd={{size: 3}}>
                <UserInfo user={this.props.user}/>
            </Col>
            <Col sm={{size: 12}} md={{size: 8}} hd={{size: 9}} style={{margin: '0 auto 0 auto'}} >
                <UserTabs tabs={['Main', 'Education', 'Contacts']}/>
            </Col>
        </Row>
      )
    }
  }

const mapStateToProps = state => ({
  user: state.userInfo
})

const mapDispatchToProps = dispatch => ({
  fetchUser: user => dispatch(getUser(user)),
  fetchUserOrgs: user => dispatch(getUserOrgs(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
