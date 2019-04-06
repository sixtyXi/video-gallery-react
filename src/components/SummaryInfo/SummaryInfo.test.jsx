import React from 'react';
import { shallow } from 'enzyme';

import { SummaryInfo } from './SummaryInfo';

describe('SummaryInfo', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SummaryInfo />);

    expect(wrapper).toMatchSnapshot();
  });
});
