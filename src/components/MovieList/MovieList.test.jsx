import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './MovieList';
import { MovieThumb } from '../MovieThumb/MovieThumb';

describe('MovieList', () => {
  const movies = [{ id: 1 }, { id: 2 }];

  test('renders *No results found*', () => {
    const wrapper = shallow(<MovieList />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders two components *MovieThumb*', () => {
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find(MovieThumb).length).toBe(2);
  });
});
