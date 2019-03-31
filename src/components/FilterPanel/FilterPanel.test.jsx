import React from 'react';
import { shallow } from 'enzyme';

import { FilterPanel } from './FilterPanel';
import { FilterItem } from './FilterItem/FilterItem';
import { SORT_FILTERS } from '../../shared/filtersMock';

describe('FilterPanel', () => {
  const title = 'Sort by';

  test('renders correctly', () => {
    const wrapper = shallow(<FilterPanel filters={SORT_FILTERS} title={title} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('not renders if filters are empty', () => {
    const wrapper = shallow(<FilterPanel title={title} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('renders title', () => {
    const wrapper = shallow(<FilterPanel filters={SORT_FILTERS} title={title} />);
    const titleElem = wrapper.find('.filterTitle');

    expect(titleElem.text()).toBe(title);
  });

  test('renders two components - *FilterItem*', () => {
    const handleChange = jest.fn();

    const wrapper = shallow(<FilterPanel filters={SORT_FILTERS} handleChange={handleChange} />);

    expect(wrapper.find(FilterItem).length).toBe(2);
  });
});
