import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { MOVIES } from '../../shared/moviesMock';
import { MovieThumb } from './MovieThumb';

describe('MovieThumb', () => {
  const movie = fromJS(MOVIES[1]);

  test('renders correctly', () => {
    const wrapper = shallow(<MovieThumb movie={movie} />);

    expect(wrapper).toMatchSnapshot();
  });
});
