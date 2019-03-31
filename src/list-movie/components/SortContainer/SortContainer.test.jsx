import React from 'react';
import { shallow, mount } from 'enzyme';

import { SortContainer } from './SortContainer';
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

import { SORT_FILTERS } from '../../../shared/filtersMock';

describe('SortContainer', () => {
  test('renders single component *FilterPanel*', () => {
    const wrapper = shallow(<SortContainer filters={SORT_FILTERS} />);

    expect(wrapper.find(FilterPanel).length).toBe(1);
  });

  test('*filterValue* equals first filter value by default', () => {
    const wrapper = shallow(<SortContainer filters={SORT_FILTERS} />);
    const firstFilterValue = SORT_FILTERS[0].value;

    expect(wrapper.state().filterValue).toBe(firstFilterValue);
  });

  test('sets new filter value to state', () => {
    const newFilterValue = 'new value';
    const wrapper = mount(<SortContainer filters={SORT_FILTERS} />);
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');

    expect(wrapper.state().filterValue).not.toBe(newFilterValue);
    spy.call(wrapper, { target: { value: newFilterValue } });
    expect(wrapper.state().filterValue).toBe(newFilterValue);
  });
});
