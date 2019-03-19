import React from 'react';
import { shallow } from 'enzyme';

import { HelloComponent } from './HelloComponent';

describe('<HelloComponent />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<HelloComponent />);

    expect(wrapper).toMatchSnapshot();
  });
});
