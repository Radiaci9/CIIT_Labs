import configureStore from 'redux-mock-store'
import C from '../../src/constants'

import * as userActions from '../../src/actions/userAction'

const mockStore = configureStore()
const store = mockStore()

describe('user_actions', () => {
    beforeEach(() => {
      store.clearActions()
    });
    describe('fetchUser()', () => {
        test('Dispatches the correct action and payload', () => {
            const data = {
                avatar: null,
                login: 'login',
                name: 'name',
                bio: 'bio',
                company: 'company',
                location: 'location',
                email: 'email',
                blog: 'blog'   
            }
            const expectedActions = [
                {
                    type: C.FETCH_USER, 
                    payload: data
                },
            ]
      
          store.dispatch(userActions.fetchUser(data))
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserFollowers()', () => {
        test('Dispatches the correct action and payload', () => {
            const data = [{
                id: 111,
                login: 'login'
            }]
            const expectedActions = [
                {
                    type: C.FETCH_USER_FOLLOWERS, 
                    payload: data
                },
            ]
      
          store.dispatch(userActions.fetchUserFollowers(data))
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserRepositories()', () => {
        test('Dispatches the correct action and payload', () => {
            const data = [{
                id: 111,
                name: 'name'
            }]
            const expectedActions = [
                {
                    type: C.FETCH_USER_REPOSITORIES, 
                    payload: data
                },
            ]
      
          store.dispatch(userActions.fetchUserRepositories(data))
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserOrgs()', () => {
        test('Dispatches the correct action and payload', () => {
            const data = []
            const expectedActions = [
                {
                    type: C.FETCH_USER_ORGS, 
                    payload: data
                },
            ]
      
          store.dispatch(userActions.fetchUserOrgs(data))
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserFailed()', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    type: C.FETCH_USER_FAILED
                },
            ]
      
          store.dispatch(userActions.fetchUserFailed())
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserRepositoriesByCriteria()', () => {
        test('Dispatches the correct action and payload', () => {
            const data = [{
                id: 111,
                name: 'name'
            }]
            const expectedActions = [
                {
                    type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA, 
                    payload: data
                },
            ]
      
          store.dispatch(userActions.fetchUserRepositoriesByCriteria(data))
          expect(store.getActions()).toEqual(expectedActions)
        })
      })

    describe('fetchUserRepositoriesByCriteriaFailed()', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED
                },
            ]
      
          store.dispatch(userActions.fetchUserRepositoriesByCriteriaFailed())
          expect(store.getActions()).toEqual(expectedActions)
        })
      })      
  
  })