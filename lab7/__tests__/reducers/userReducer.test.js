import { userReducer } from '../../src/reducers/userReducer'
import C from '../../src/constants'


describe('user_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
          const action = { type: 'dummy_action' }
          const initialState = { 
                avatar: null,
                login: '',
                name: '',
                bio: '',
                company: '',
                location: '',
                email: '',
                blog: '',
                orgs: [],
                followers: null,
                repositories: null,
                error: false
           }
      
          expect(userReducer(undefined, action)).toEqual(initialState);
        })
      })

    describe('FETCH_USER', () => {
        test('FETCH_USER is correct', () => {
            const data = {
                avatar_url: null,
                login: 'login',
                name: 'name',
                bio: 'bio',
                company: 'company',
                location: 'location',
                email: 'email',
                blog: 'blog'
            }
            const action = { type: C.FETCH_USER, payload: data }
            const expectedState = { 
                avatar: null,
                login: 'login',
                name: 'name',
                bio: 'bio',
                company: 'company',
                location: 'location',
                email: 'email',
                blog: 'blog',
                orgs: [],
                followers: null,
                repositories: null,
                error: false
            }        
            expect(userReducer(undefined, action)).toEqual(expectedState);
        })
    })

    describe('FETCH_USER_FOLLOWERS', () => {
        test('FETCH_USER_FOLLOWERS is correct', () => {
            const data = [{
                id: 111,
                login: 'login'
            }]
            const action = { type: C.FETCH_USER_FOLLOWERS, payload: data }
            const expectedState = { 
                avatar: null,
                login: '',
                name: '',
                bio: '',
                company: '',
                location: '',
                email: '',
                blog: '',
                orgs: [],
                followers: data,
                repositories: null,
                error: false
            }        
            expect(userReducer(undefined, action)).toEqual(expectedState);
        })
    })

    describe('FETCH_USER_REPOSITORIES', () => {
        test('FETCH_USER_REPOSITORIES is correct', () => {
            const data = [{
                id: 111,
                name: 'name'
            }]
            const action = { type: C.FETCH_USER_REPOSITORIES, payload: data }
            const expectedState = { 
                avatar: null,
                login: '',
                name: '',
                bio: '',
                company: '',
                location: '',
                email: '',
                blog: '',
                orgs: [],
                followers: null,
                repositories: data,
                error: false
            }        
            expect(userReducer(undefined, action)).toEqual(expectedState);
        })
    })

    describe('FETCH_USER_ORGS', () => {
        test('FETCH_USER_ORGS is correct', () => {
            const data = [{
                id: 111,
                name: 'org1'
            }]
            const action = { type: C.FETCH_USER_ORGS, payload: data }
            const expectedState = { 
                avatar: null,
                login: '',
                name: '',
                bio: '',
                company: '',
                location: '',
                email: '',
                blog: '',
                orgs: data,
                followers: null,
                repositories: null,
                error: false
            }        
            expect(userReducer(undefined, action)).toEqual(expectedState);
        })
    })

    describe('FETCH_USER_FAILED', () => {
        test('FETCH_USER_FAILED is correct', () => {            
            const action = { type: C.FETCH_USER_FAILED }
            const expectedState = { 
                avatar: null,
                login: '',
                name: '',
                bio: '',
                company: '',
                location: '',
                email: '',
                blog: '',
                orgs: [],
                followers: null,
                repositories: null,
                error: true
            }        
            expect(userReducer(undefined, action)).toEqual(expectedState);
        })
    })
})
