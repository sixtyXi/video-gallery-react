import React from 'react';
import { shallow } from 'enzyme';

import { SortFilterContainer } from './SortFilterContainer';
import { FilterPanel } from '../../../components/FilterPanel/FilterPanel';

import { SORT_FILTERS } from '../../../shared/filtersMock';

describe('SortContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SortFilterContainer filters={SORT_FILTERS} />);
  });

  test('renders single component *FilterPanel*', () => {
    expect(wrapper.find(FilterPanel).length).toBe(1);
  });

  test('*filterValue* equals first filter value by default', () => {
    const firstFilterValue = SORT_FILTERS[0].value;

    expect(wrapper.state().filterValue).toBe(firstFilterValue);
  });

  test('sets new filter value to state', () => {
    const newFilterValue = 'new value';
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');

    expect(wrapper.state().filterValue).not.toBe(newFilterValue);
    spy.call(wrapper, { target: { value: newFilterValue } });
    expect(wrapper.state().filterValue).toBe(newFilterValue);
  });
});
