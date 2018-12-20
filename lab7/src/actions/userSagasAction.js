import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import * as userAction from './userAction'

const user = 'gaearon'

export function* fetchUserAsync() {
   try {
      const data = yield call(() => (
         axios.get(`https://api.github.com/users/${user}`)
            .then(res => res.data)))
         yield data
         yield put(userAction.fetchUser(data))
    } catch (error) {
         yield put(userAction.fetchUserFailed())
    }            
 }
 
 export function* fetchUserFollowersAsync() {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/users/${user}/followers`)
                .then(response => response.data)
         )
        )
        yield data
        yield put(userAction.fetchUserFollowers(data))
    } catch (error) {
       yield put(userAction.fetchUserFailed())
    }
 }
 
 export function* fetchUserRepositoriesAsync() {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/users/${user}/repos`)
                .then(response => response.data)
         )
        )
        yield data
        yield put(userAction.fetchUserRepositories(data))
    } catch (error) {
       yield put(userAction.fetchUserFailed())
    }
 }
 
 export function* fetchUserOrgsAsync() {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/users/${user}/orgs`)
                .then(response => response.data)
         )
        )
        yield data
        yield put(userAction.fetchUserOrgs(data))
    } catch (error) {
       yield put(userAction.fetchUserFailed())
    }
 }
 
 export function* fetchUserRepositoriesByCriteriaAsync(action) {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/search/repositories?q=${action.payload.type ? `user:${user}+` : ''}${action.payload.name}in:name`)
                .then(response => response.data.items.slice(0,100))
         )
        )
        yield data
        yield put(userAction.fetchUserRepositoriesByCriteria(data))
    } catch (error) {
       yield put(userAction.fetchUserRepositoriesByCriteriaFailed())
    }
 }
 
 export function* fetchUserRepositoriesByCriteriaBestAsync() {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/search/repositories?q=stars:>=20000`)
                .then(response => response.data.items.slice(0,5))
         )
        )
        yield data
        yield put(userAction.fetchUserRepositoriesByCriteria(data))
    } catch (error) {
       yield put(userAction.fetchUserRepositoriesByCriteriaFailed())
    }
 }
 
 
 export function* fetchUserRepositoriesByCriteriaBestFastGrowingAsync() {
    try {
        const data = yield call(() => (
           axios.get(`https://api.github.com/search/repositories?q=size:>=2000000`)
                .then(response => response.data.items.slice(0,5))
         )
        )
        yield data
        yield put(userAction.fetchUserRepositoriesByCriteria(data))
    } catch (error) {
       yield put(userAction.fetchUserRepositoriesByCriteriaFailed())
    }
 }
 