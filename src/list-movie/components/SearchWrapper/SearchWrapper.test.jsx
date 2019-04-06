import React from 'react';
import { shallow } from 'enzyme';

import { SearchWrapper } from './SearchWrapper';

describe('SearchWrapper', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SearchWrapper />);

    expect(wrapper).toMatchSnapshot();
  });
});
