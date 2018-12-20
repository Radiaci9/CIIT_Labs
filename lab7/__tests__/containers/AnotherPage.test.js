import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import AnotherPage from '../../src/containers/AnotherPage'
import configureStore from 'redux-mock-store'

import { Provider } from 'react-redux'

const mockStore = configureStore();
const initialState = {
    userInfo: {             
        followers: null,
        repositories: null,
        error: false   
    }
}
let store;


beforeEach(()=> {
    store = mockStore(initialState);
})

describe('<AnotherPage />', () => {    
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = mount(<Provider store={store}><AnotherPage/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
   
        test('renders the component with full data', () => {
            store = mockStore({ 
                userInfo: {             
                    followers: [{
                        id: "id1",
                        login: "login1"
                    }],
                    repositories: [{
                        id: "id1",
                        name: "name1"
                    }],
                    error: false   
                }
            })
            const wrapper = mount(<Provider store={store}><AnotherPage/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
        
        test('renders the component with empty data', () => {
            store = mockStore({ 
                userInfo: {             
                    followers: [],
                    repositories: [],
                    error: true   
                }
            })
            const wrapper = mount(<Provider store={store}><AnotherPage/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
      })
})

