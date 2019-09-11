import React from 'react';
import { shallow } from 'enzyme';

import { FilterItem } from './FilterItem';

describe('FilterItem', () => {
  const filter = {
    value: 'vote_average',
    title: 'rating'
  };
  const name = 'filterValue';

  let handleChange;

  let wrapper;

  beforeEach(() => {
    handleChange = jest.fn();
    wrapper = shallow(
      <FilterItem
        name={name}
        handleChange={handleChange}
        filterValue={filter.value}
        filterTitle={filter.title}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('calls *handleChange*', () => {
    const input = wrapper.find('input');

    input.simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });

  test('displays *filterTitle*', () => {
    const btnTitle = wrapper.find('label').text();

    expect(btnTitle).toBe(filter.title);
  });

  test('manages correctly *filterValue*', () => {
    const input = wrapper.find('input');

    const inputId = input.prop('id');
    const inputValue = input.prop('value');

    expect(inputId).toBe(filter.value);
    expect(inputValue).toBe(filter.value);
  });
});
