import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LabelWithIcon from '../../src/components/LabelWithIcon'

describe('<LabelWithIcon />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<LabelWithIcon iconSrc='../../img/link.svg' label='label' link={true}/>)  
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })

  describe('render()', () => {
    test('renders the component without link and null label', () => {
      const wrapper = shallow(<LabelWithIcon iconSrc='../../img/link.svg' label={null} link={false}/>)  
      expect(wrapper.find('[name="pLink"]').text()).toEqual('none');
    })
  })

  describe('render()', () => {
    test('renders the component without link', () => {
      const wrapper = shallow(<LabelWithIcon iconSrc='../../img/link.svg' label='label' link={false}/>)  
      expect(wrapper.find('[name="pLink"]').text()).toEqual('label');
    })
  })

  describe('render()', () => {
    test('renders the component with link and null label', () => {
      const wrapper = shallow(<LabelWithIcon iconSrc='../../img/link.svg' label={null} link={true}/>)  
      expect(wrapper.find('[name="aLink"]').text()).toEqual('none');
    })
  })
})
