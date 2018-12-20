import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as userSagasAction from '../../src/actions/userSagasAction'
import * as userAction from '../../src/actions/userAction'
import C from '../../src/constants'
const user = 'gaearon'


describe('sagas actions calls', () => {
    describe('fetchUserAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/users/${user}`)
                    .then(res => res.data)
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user', () => {            
            const generator = userSagasAction.fetchUserAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUser(data)))
        })

        test('must UNSUCCESFULL put user', () => {
            const generator = userSagasAction.fetchUserAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('fetchUserFollowersAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserFollowersAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/users/${user}/followers`)
                    .then(res => res.data)
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user followers', () => {            
            const generator = userSagasAction.fetchUserFollowersAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserFollowers(data)))
        })

        test('must UNSUCCESFULL put user followers', () => {
            const generator = userSagasAction.fetchUserFollowersAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })
    
    describe('fetchUserRepositoriesAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserRepositoriesAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/users/${user}/repos`)
                    .then(res => res.data)
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user repositories', () => {            
            const generator = userSagasAction.fetchUserRepositoriesAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserRepositories(data)))
        })

        test('must UNSUCCESFULL put user repositories', () => {
            const generator = userSagasAction.fetchUserRepositoriesAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('fetchUserOrgsAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserOrgsAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/users/${user}/orgs`)
                    .then(res => res.data)
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user orgs', () => {            
            const generator = userSagasAction.fetchUserOrgsAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserOrgs(data)))
        })

        test('must UNSUCCESFULL put user orgs', () => {
            const generator = userSagasAction.fetchUserOrgsAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('fetchUserRepositoriesByCriteriaAsync(action)', () => {      
        const action = {type: C.FETCHED_USER_REPOSITORIES_BY_CRITERIA, payload: {name: 'react', type: true}}  
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaAsync(action)
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/search/repositories?q=${action.payload.type ? `user:${user}+` : ''}${action.payload.name}in:name`)
                    .then(response => response.data.items.slice(0,100))
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user repositories on search result', () => {            
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaAsync(action)
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserRepositoriesByCriteria(data)))
        })

        test('must UNSUCCESFULL put user repositories on search result', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaAsync(action)
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserRepositoriesByCriteriaFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('fetchUserRepositoriesByCriteriaBestAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/search/repositories?q=stars:>=20000`)
                    .then(response => response.data.items.slice(0,5))
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user the best five repositories', () => {            
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserRepositoriesByCriteria(data)))
        })

        test('must UNSUCCESFULL put user the best five repositories', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserRepositoriesByCriteriaFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('fetchUserRepositoriesByCriteriaBestFastGrowingAsync()', () => {        
        test('must call axios', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestFastGrowingAsync()
            const testValue = generator.next().value
            const expectedValue = call(() => (
                axios.get(`https://api.github.com/search/repositories?q=size:>=2000000`)
                    .then(response => response.data.items.slice(0,5))
                )
            )
            expect(JSON.parse(JSON.stringify(testValue))).toEqual(JSON.parse(JSON.stringify(expectedValue)))
        })

        test('must SUCCESFULL put user the best five growing', () => {            
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestFastGrowingAsync()
            generator.next().value
            const data = generator.next().value
            const testValue = generator.next().value            
            expect(testValue).toEqual(put(userAction.fetchUserRepositoriesByCriteria(data)))
        })

        test('must UNSUCCESFULL put user the best five growing', () => {
            const generator = userSagasAction.fetchUserRepositoriesByCriteriaBestFastGrowingAsync()
            generator.next().value
            const testValue = generator.throw('error').value
            const expectedValue = put(userAction.fetchUserRepositoriesByCriteriaFailed())
            expect(testValue).toEqual(expectedValue)
        })
    })
})