import { searchReducer } from '../../src/reducers/searchReducer'
import C from '../../src/constants'


describe('search_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
          const action = { type: 'dummy_action' }
          const initialState = { 
                repositories: [],
                error: false
           }
      
          expect(searchReducer(undefined, action)).toEqual(initialState);
        })
      })

    describe('FETCH_USER_REPOSITORIES_BY_CRITERIA', () => {
        test('FETCH_USER_REPOSITORIES_BY_CRITERIA is correct', () => {
            const data = [{
                id: 111,
                name: 'name'
            }]
            const action = { type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA, payload: data }
            const expectedState = { 
                repositories: data,
                error: false
            }        
            expect(searchReducer(undefined, action)).toEqual(expectedState);
        })
    })

    describe('FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED', () => {
        test('FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED is correct', () => {            
            const action = { type: C.FETCH_USER_REPOSITORIES_BY_CRITERIA_FAILED }
            const expectedState = { 
                repositories: [],
                error: true
            }        
            expect(searchReducer(undefined, action)).toEqual(expectedState);
        })
    })
})
