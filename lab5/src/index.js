import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"

import Home from "./containers/Home"
import AnotherPage from "./containers/AnotherPage"

import store from "./store"
import history from "./history"

import "./styles/bootstrap.min.css"
import "./styles/index.css"
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact string path="/" component={Home}/>
                <Route exact string path="/anotherPage" component={AnotherPage}/>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById("root")
)
