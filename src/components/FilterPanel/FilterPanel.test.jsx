import React from 'react';
import { shallow } from 'enzyme';

import { FilterPanel } from './FilterPanel';
import { FilterItem } from './FilterItem/FilterItem';
import { SORT_FILTERS } from '../../shared/filtersMock';

describe('FilterPanel', () => {
  const title = 'Sort by';
  const name = 'filterValue';
  const filters = SORT_FILTERS;

  test('renders correctly', () => {
    const wrapper = shallow(<FilterPanel filters={filters} title={title} name={name} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('not renders if filters are empty', () => {
    const wrapper = shallow(<FilterPanel name={name} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders title', () => {
    const wrapper = shallow(<FilterPanel filters={filters} title={title} name={name} />);
    const titleElem = wrapper.find('.filterTitle');

    expect(titleElem.text()).toBe(title);
  });

  test('renders two components - *FilterItem*', () => {
    const wrapper = shallow(<FilterPanel filters={filters} name={name} />);

    expect(wrapper.find(FilterItem).length).toBe(2);
  });
});
