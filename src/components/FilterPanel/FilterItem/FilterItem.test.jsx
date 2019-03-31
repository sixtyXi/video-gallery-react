import React from 'react';
import { shallow } from 'enzyme';

import { FilterItem } from './FilterItem';

let handleChange;

describe('FilterItem', () => {
  beforeEach(() => {
    handleChange = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const wrapper = shallow(<FilterItem />);

    expect(wrapper).toMatchSnapshot();
  });

  test('calls *handleChange*', () => {
    const wrapper = shallow(<FilterItem handleChange={handleChange} />);
    const input = wrapper.find('input');

    input.simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });

  test('displays *filterTitle*', () => {
    const filterTitle = 'genre';

    const wrapper = shallow(<FilterItem handleChange={handleChange} filterTitle={filterTitle} />);
    const btnTitle = wrapper.find('label').text();

    expect(btnTitle).toBe(filterTitle);
  });

  test('manages correctly *filterValue*', () => {
    const filterValue = 'release_date';

    const wrapper = shallow(<FilterItem handleChange={handleChange} filterValue={filterValue} />);
    const input = wrapper.find('input');

    const inputId = input.prop('id');
    const inputValue = input.prop('value');

    expect(inputId).toBe(filterValue);
    expect(inputValue).toBe(filterValue);
  });
});
