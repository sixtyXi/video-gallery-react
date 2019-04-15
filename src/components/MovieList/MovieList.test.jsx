import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './MovieList';
import MovieThumbContainer from '../../containers/MovieThumbContainer/MovieThumbContainer';
import { MOVIES } from '../../shared/moviesMock';

describe('MovieList', () => {
  const movies = MOVIES.slice(0, 2);

  test('renders *No results found*', () => {
    const wrapper = shallow(<MovieList />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders two components *MovieThumbContainer*', () => {
    const wrapper = shallow(<MovieList movies={movies} />);

    expect(wrapper.find(MovieThumbContainer).length).toBe(2);
  });
});
