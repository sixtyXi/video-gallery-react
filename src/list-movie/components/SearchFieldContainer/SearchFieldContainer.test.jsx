import React from 'react';
import { shallow } from 'enzyme';

import { SearchFieldContainer } from './SearchFieldContainer';

describe('SearchFieldContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchFieldContainer />);
  })

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('calls handleChange on input value changes', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.update();
    wrapper.instance().forceUpdate();

    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'New text' } });
    expect(spy).toHaveBeenCalled();
  });

  test('sets new input value to state', () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'New text' } });
    expect(wrapper.state().searchTxt).toBe('New text');
  });
});
