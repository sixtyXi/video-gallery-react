import React from 'react';
import { shallow } from 'enzyme';

import { SearchContainer } from './SearchContainer';

describe('SearchContainer', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SearchContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
