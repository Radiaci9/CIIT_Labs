import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavBar from '../../src/components/NavBar'

describe('<NavBar />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<NavBar items={[ {label: 'label', click: () => {} } ]}/>)
      const component = wrapper.dive()

      expect(toJson(component)).toMatchSnapshot()
    })
  })

  describe('onClick()', () => {
    test('successfully calls the onClick handler', () => {
      const mockOnClick = jest.fn()
      const wrapper = shallow(
        <NavBar items={[ {label: 'label', click: () => mockOnClick() } ]}/>
      );
      const component = wrapper.dive()
      component.find('[name="button0"]').simulate('click');

      expect(mockOnClick.mock.calls.length).toEqual(1);
    })
  })
})
