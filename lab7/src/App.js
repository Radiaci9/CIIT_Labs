import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import NavBar from './components/NavBar'
import RepositoriesPage from './containers/RepositoriesPage'
import Home from './containers/Home'
import AnotherPage from './containers/AnotherPage'

import store from './store'
import history from './history'

let navItems = [
  {
    label: 'Home Page',
    click: () => history.push('/')
  },
  {
    label: 'Page Repositories and Followers',
    click: () => history.push('/anotherPage')
  },
  {
    label: 'Best Repositories',
    click: () => history.push('/repositoriesPage')
  }
]
    
    export default class App extends React.Component {      
      render() {
        return (
          <Provider store={store}>
            <Router history={history}>
                <div>
                  <NavBar items = {navItems}/>
                  <Switch>
                      <Route exact string path='/' component={Home}/>
                      <Route exact string path='/anotherPage' component={AnotherPage}/>
                      <Route exact string path='/repositoriesPage' component={RepositoriesPage}/>
                  </Switch>
                </div>
            </Router>
        </Provider>
        )
      }
    }