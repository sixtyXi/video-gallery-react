import React from 'react';
import { shallow } from 'enzyme';

import { MovieCard } from './MovieCard';
import { MOVIES } from '../../../shared/moviesMock';

describe('MovieCard', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<MovieCard movie={MOVIES[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
