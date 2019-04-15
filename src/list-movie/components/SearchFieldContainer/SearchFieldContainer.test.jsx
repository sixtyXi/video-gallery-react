import React from 'react';
import { shallow } from 'enzyme';

import { SearchFieldContainer } from './SearchFieldContainer';

describe('SearchFieldContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchFieldContainer />);
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
