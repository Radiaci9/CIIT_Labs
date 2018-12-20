import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '../../src/containers/Home'
import configureStore from 'redux-mock-store'

import { Provider } from 'react-redux'

const mockStore = configureStore();
const initialState = {
    userInfo: {
        avatar: null,
        login: 'login',
        name: 'name',
        bio: 'bio',
        company: 'company',
        location: 'location',
        email: 'email',
        blog: 'blog'   
    }
}
let store;


describe('<Home />', () => {    
    beforeEach(()=> {
        store = mockStore(initialState);
    })
    describe('render()', () => {
      test('renders the component', () => {
          const wrapper = mount(<Provider store={store}><Home/></Provider>)
          expect(toJson(wrapper)).toMatchSnapshot()
      })
    })
})

