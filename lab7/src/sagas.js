import { takeEvery, fork } from 'redux-saga/effects'
import * as userSagasAction from './actions/userSagasAction.js'
import C from './constants'

export function* watchFetchUser() {
  yield fork(takeEvery, C.FETCHED_USER, userSagasAction.fetchUserAsync)
}
export function* watchFetchUserFollowers() {
  yield fork(takeEvery, C.FETCHED_USER_FOLLOWERS, userSagasAction.fetchUserFollowersAsync)
}
export function* watchFetchUserRepositories() {
  yield fork(takeEvery, C.FETCHED_USER_REPOSITORIES, userSagasAction.fetchUserRepositoriesAsync)
}
export function* watchFetchUserOrgs() {
  yield fork(takeEvery, C.FETCHED_USER_ORGS, userSagasAction.fetchUserOrgsAsync)
}
export function* watchFetchUserRepositoriesByCriteria() {
  yield fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA, userSagasAction.fetchUserRepositoriesByCriteriaAsync)
}
export function* watchFetchUserRepositoriesByCriteriaBest() {
  yield fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST, userSagasAction.fetchUserRepositoriesByCriteriaBestAsync)
}
export function* watchFetchUserRepositoriesByCriteriaBestFastGrowing() {
  yield fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST_FAST_GROWING, userSagasAction.fetchUserRepositoriesByCriteriaBestFastGrowingAsync)
}
