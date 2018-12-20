import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UserInfo from '../../src/components/UserInfo'

describe('<UserInfo />', () => {
  describe('render()', () => {
    test('renders the component', () => {
        const user = {
            avatar: null,
            login: 'login',
            name: 'name',
            bio: 'bio',
            company: 'company',
            location: 'location',
            email: 'email',
            blog: 'blog'
        }
        const wrapper = shallow(<UserInfo user={user}/>)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('set login', () => {
    test('successfully set login', () => {
        const user = {
            avatar: null,
            login: 'login',
            name: 'name',
            bio: 'bio',
            company: 'company',
            location: 'location',
            email: 'email',
            blog: 'blog'
        }
        const wrapper = shallow(<UserInfo user={user}/>)
        expect(wrapper.find('[name="login"]').text()).toEqual('login') 
    })
  })

  describe('loading user', () => {
    test('user not found', () => {
        const user = {
            avatar: null,
            login: null,
            name: null,
            bio: null,
            company: null,
            location: null,
            email: null,
            blog: null
        }
        const wrapper = shallow(<UserInfo user={user}/>)
        expect(wrapper.find('img')).toHaveLength(1) 
    })
  })
})
