import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from "immutable";

import { MovieList } from './MovieList';
import { MovieThumb } from '../MovieThumb/MovieThumb';
import { MOVIES } from '../../shared/moviesMock';

describe('MovieList', () => {
  const movies = MOVIES.slice(0, 2);

  test('renders *No results found*', () => {
    const wrapper = shallow(<MovieList movies={fromJS([])}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const wrapper = shallow(<MovieList movies={fromJS(movies)} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders two components *MovieThumb*', () => {
    const wrapper = shallow(<MovieList movies={fromJS(movies)} />);

    expect(wrapper.find(MovieThumb).length).toBe(2);
  });
});
