import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UserTabs from '../../src/components/UserTabs'

describe('<UserTabs />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<UserTabs tabs={["tab1"]}/>)

      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
})
