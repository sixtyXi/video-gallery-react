import React from 'react';
import { shallow } from 'enzyme';

import { ContentWrapper } from './ContentWrapper';

describe('ContentWrapper', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<ContentWrapper />);

    expect(wrapper).toMatchSnapshot();
  });
});
