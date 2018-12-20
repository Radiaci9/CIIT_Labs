import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import RepositoriesPage from '../../src/containers/RepositoriesPage'
import configureStore from 'redux-mock-store'

import { Provider } from 'react-redux'

const mockStore = configureStore();
const initialState = {
    resSearch: {
        repositories: [],
        error: false
    }
}
let store;

beforeEach(()=> {
    store = mockStore(initialState);
})
describe('<RepositoriesPage />', () => {     
    describe('render()', () => {
        test('renders the component', () => {
            const wrapper = mount(<Provider store={store}><RepositoriesPage/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot()
        })

        test('render the component with data', () => {
            store = mockStore({
                resSearch: {
                    repositories: [{
                        id: "id1",
                        name: "name1"
                    }],
                    error: false
                }
            })
            const wrapper = mount(<Provider store={store}><RepositoriesPage/></Provider>)
            expect(toJson(wrapper)).toMatchSnapshot()
        })
      })
})

