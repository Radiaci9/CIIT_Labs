import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import * as watcher from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watcher.watchFetchUser)
sagaMiddleware.run(watcher.watchFetchUserFollowers)
sagaMiddleware.run(watcher.watchFetchUserRepositories)
sagaMiddleware.run(watcher.watchFetchUserOrgs)
sagaMiddleware.run(watcher.watchFetchUserRepositoriesByCriteria)
sagaMiddleware.run(watcher.watchFetchUserRepositoriesByCriteriaBest)
sagaMiddleware.run(watcher.watchFetchUserRepositoriesByCriteriaBestFastGrowing)

export default store
