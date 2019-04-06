import React from 'react';
import { shallow } from 'enzyme';

import { SearchBtn } from './SearchBtn';

describe('SearchBtn', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SearchBtn />);

    expect(wrapper).toMatchSnapshot();
  });
});
