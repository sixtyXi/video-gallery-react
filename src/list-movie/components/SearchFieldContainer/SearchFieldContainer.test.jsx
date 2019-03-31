import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchFieldContainer } from './SearchFieldContainer';

describe('SearchFieldContainer', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SearchFieldContainer />);

    expect(wrapper).toMatchSnapshot();
  });

  test('calls *handleChange* on input value changes', () => {
    const wrapper = mount(<SearchFieldContainer />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    const input = wrapper.find('input');

    input.simulate('change');
    expect(spy).toHaveBeenCalled();
  });

  test('sets new input value to state', () => {
    const wrapper = mount(<SearchFieldContainer />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'New text' } });
    expect(wrapper.state().searchTxt).toBe('New text');
  });
});
