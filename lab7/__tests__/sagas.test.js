import {takeEvery, fork } from 'redux-saga/effects'
import * as userSagasAction from '../src/actions/userSagasAction'
import * as asuncFunctions from '../src/sagas'

import C from '../src/constants'

describe('sagas calls', () => {
    describe('watchFetchUser()', () => {
        test('must call watchFetchUser', () => {
            const generator = asuncFunctions.watchFetchUser() 
            const testValue = generator.next().value
            const expectedValue = fork(takeEvery, C.FETCHED_USER, userSagasAction.fetchUserAsync)
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserFollowers()', () => {
        test('must call watchFetchUserFollowers', () => {
            const generator = asuncFunctions.watchFetchUserFollowers() 
            const testValue = generator.next().value
            const expectedValue = fork(takeEvery, C.FETCHED_USER_FOLLOWERS, userSagasAction.fetchUserFollowersAsync)
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserRepositories()', () => {
        test('must call watchFetchUserRepositories', () => {
            const generator = asuncFunctions.watchFetchUserRepositories() 
            const testValue = generator.next().value
            const expectedValue = fork(takeEvery, C.FETCHED_USER_REPOSITORIES, userSagasAction.fetchUserRepositoriesAsync)
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserOrgs()', () => {
        test('must call watchFetchUserOrgs', () => {
            const generator = asuncFunctions.watchFetchUserOrgs() 
            const testValue = generator.next().value
            const expectedValue = fork(takeEvery, C.FETCHED_USER_ORGS, userSagasAction.fetchUserOrgsAsync)
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserRepositoriesByCriteria()', () => {
        test('must call watchFetchUserRepositoriesByCriteria', () => {
            const generator = asuncFunctions.watchFetchUserRepositoriesByCriteria() 
            const testValue = generator.next().value
            const expectedValue = 
                fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA, 
                    userSagasAction.fetchUserRepositoriesByCriteriaAsync
                )
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserRepositoriesByCriteriaBest()', () => {
        test('must call watchFetchUserRepositoriesByCriteriaBest', () => {
            const generator = asuncFunctions.watchFetchUserRepositoriesByCriteriaBest() 
            const testValue = generator.next().value
            const expectedValue = 
                fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST, 
                    userSagasAction.fetchUserRepositoriesByCriteriaBestAsync
                )
            
            expect(testValue).toEqual(expectedValue)
        })
    })

    describe('watchFetchUserRepositoriesByCriteriaBestFastGrowing()', () => {
        test('must call watchFetchUserRepositoriesByCriteriaBestFastGrowing', () => {
            const generator = asuncFunctions.watchFetchUserRepositoriesByCriteriaBestFastGrowing() 
            const testValue = generator.next().value
            const expectedValue = 
                fork(takeEvery, C.FETCHED_USER_REPOSITORIES_BY_CRITERIA_BEST_FAST_GROWING, 
                    userSagasAction.fetchUserRepositoriesByCriteriaBestFastGrowingAsync
                )
            
            expect(testValue).toEqual(expectedValue)
        })
    })
})