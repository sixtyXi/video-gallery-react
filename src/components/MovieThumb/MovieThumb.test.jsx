import React from 'react';
import { shallow } from 'enzyme';

import { MOVIES } from '../../shared/moviesMock';
import { MovieThumb } from './MovieThumb';

describe('MovieThumb', () => {
  const movie = MOVIES[1];

  test('renders correctly', () => {
    const wrapper = shallow(<MovieThumb movie={movie} />);

    expect(wrapper).toMatchSnapshot();
  });
});
