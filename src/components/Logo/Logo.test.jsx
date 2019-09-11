import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from './Logo';

describe('Logo', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Logo />);

    expect(wrapper).toMatchSnapshot();
  });
});
